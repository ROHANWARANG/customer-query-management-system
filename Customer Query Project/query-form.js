document.getElementById("queryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pnr = document.getElementById("pnr").value.trim();
    const flight = document.getElementById("flight").value.trim();
    const queryType = document.getElementById("queryType").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !pnr || !flight || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Get current date and time
    const now = new Date();
    const timestamp = now.toLocaleString('en-GB', { 
        day: '2-digit', month: '2-digit', year: 'numeric', 
        hour: '2-digit', minute: '2-digit', second: '2-digit', 
        hour12: true 
    }); // Format: DD/MM/YYYY, HH:MM:SS AM/PM

    // Check if the date display element exists
    let dateTimeElement = document.getElementById("dateTimeDisplay");
    if (!dateTimeElement) {
        dateTimeElement = document.createElement("p");
        dateTimeElement.id = "dateTimeDisplay";
        document.getElementById("queryForm").appendChild(dateTimeElement);
    }
    dateTimeElement.innerText = "Submitted on: " + timestamp;

    const queryData = {
        name,
        email,
        pnr,
        flight,
        queryType,
        message,
        timestamp // Adding timestamp to query data
    };

    fetch("http://localhost:8080/submit-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Query submitted successfully at " + timestamp);
            document.getElementById("queryForm").reset();
        } else {
            alert("Failed to submit query. Try again.");
        }
    })
    .catch(error => alert("Error submitting query!"));
});