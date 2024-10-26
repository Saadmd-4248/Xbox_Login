function emailPage() {
    var email = document.getElementById("user_email").value;
    if (!email) {
        alert("Enter a valid email address, phone number, or Skype name.");
        return false;
    }
    window.location.href = "password.html";
    return false;
}

function goToHome() {
    var password = document.getElementById("user_pass").value;
    if (!password) {
        alert("Please enter the password for your Microsoft account.");
        return false;
    }
    if (password.length < 8) {
        alert("Password must be 8 characters.");
        return false;
    }
    if (password !== "12345678") {
        alert("Incorrect password.");
        return false;
    }
    window.location.href = "home.html";
    return false;
}

function togglePassword() {
    var passwordField = document.getElementById("user_pass");
    var toggleIcon = document.getElementById("toggleIcon");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}