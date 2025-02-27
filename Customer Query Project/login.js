document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
        alert("Please enter both email and password");
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        console.log("Response Status:", response.status);

        const data = await response.json();
        console.log("Response Data:", data);

        if (data.success) {
            alert("Login successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error logging in!");
    }
});