document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            };

            fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Signup failed");
                }
                return response.json();
            })
            .then(data => {
                alert("Signup successful! Please login.");
                window.location.href = "login.html";
            })
            .catch(error => {
                alert(error.message);
            });
        });
    } else {
        console.error("Signup form not found. Make sure the HTML ID is correct.");
    }
});