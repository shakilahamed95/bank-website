document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == "shakil@gmail.com" && userPassword == "shakil") {
        window.location.href = "banking.html";
    }
    else {
        alert("please enter correct email and password");
    }
})