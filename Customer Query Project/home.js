document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("queryBtn").addEventListener("click", function () {
        window.location.href = "query-form.html";
    });

    document.getElementById("logoutBtn").addEventListener("click", function () {
        alert("Logging out...");
        window.location.href = "login.html";
    });
});