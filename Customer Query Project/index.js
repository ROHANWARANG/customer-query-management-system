document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // ✅ Handle Signup
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("signupName").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            fetch("http://localhost:8080/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Signup Successful!");
                    window.location.href = "login.html";  // Redirect to login
                } else {
                    alert("Signup Failed! Try Again.");
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }

    // ✅ Handle Login
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            fetch("http://localhost:8080/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Login Successful!");
                    window.location.href = "home.html";  // Redirect to home
                } else {
                    alert("Invalid Credentials!");
                }
            })
            .catch(error => console.error("Error:", error));
        });
    }
});