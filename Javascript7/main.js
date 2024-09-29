const form = document.getElementById('form');
const registerBtn = document.getElementById('registerBtn');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const conPasswordError = document.getElementById('conPasswordError');
const successMessage = document.getElementById('successMessage');

function validateInputs() {
    const user = form["username"].value;
    const pass = form["password"].value;
    const conPass = form["conPassword"].value;
    let valid = true;

    usernameError.textContent = '';
    passwordError.textContent = '';
    conPasswordError.textContent = '';

    if (!user) {
        usernameError.textContent = "Username is required.";
        valid = false;
    }

    if (!pass) {
        passwordError.textContent = "Password is required.";
        valid = false;
    }

    if (!conPass) {
        conPasswordError.textContent = "Confirm Password is required.";
        valid = false;
    } else if (pass !== conPass) {
        conPasswordError.textContent = "Passwords do not match.";
        valid = false;
    }

    registerBtn.disabled = !valid;
}

function handleSubmit(event) {
    event.preventDefault();
    successMessage.textContent = "User registered successfully!";
}

form.addEventListener('input', validateInputs);
form.addEventListener('submit', handleSubmit);
