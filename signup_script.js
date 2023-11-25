
    function validatePassword() {
    // Prevent the default form submission
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("password-error");

    // Define the password validation regex
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d).*_.*$/;

    // Check the length
    var validLength = password.length >= 8 && password.length <= 15;
    // Check if it starts with an uppercase letter
    var startsWithUppercase = /^[A-Z]/.test(password);
    // Check the rest of the conditions
    var validConditions = passwordRegex.test(password);

    var isValid = validLength && startsWithUppercase && validConditions;

    if (email && isValid) {
    // If email and password are valid, redirect to the home page
    window.location.href = "index.html";
} else {
    // If not valid, display error message
    passwordError.style.display = "block";
    if (!email) {
    alert("Please fill in the email field!");
}
}
}
