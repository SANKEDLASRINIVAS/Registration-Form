document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const messageElement = document.getElementById("message");

    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match.";
    } else {
        messageElement.textContent = "Registration successful!";
        // Here, you can also send the data to a server if needed.
    }
});
