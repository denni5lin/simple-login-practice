function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error');

    if (username === "testuser" && password === "Test123") {
    window.location.href = "success.html";
    } else {
    errorMsg.textContent = "Invalid username or password.";
    }
}