const form = document.querySelector("form");

const singUp = (e) => {
    e.preventDefault();

    const username = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const usernameInputValidation = requiredValidation(username)
    const emailInputValidation = requiredValidation(email);
    const passwordInputValidation = requiredValidation(password)
    const confirmPasswordInputValidation = requiredValidation(confirmPassword);

    if (!usernameInputValidation && !emailInputValidation && !passwordInputValidation && !confirmPasswordInputValidation) {
        console.log("success now");
    }

    form.reset();
}

form.addEventListener("submit", singUp);


// validation
const requiredValidation = (input) => {

    let nextsiblingele = input.nextElementSibling;

    if (input.value.length === 0) {

        input.classList.add("border-yellow-600");
        input.classList.add("placeholder-yellow-600");

        nextsiblingele.classList.remove("hidden");

        return true;
    }

    return false;
}


// reset validation
const resetValidation = (input) => {

    let nextsiblingele = input.nextElementSibling;

    nextsiblingele.classList.add("hidden");

    // remove from input (IMPORTANT)
    input.classList.remove("border-yellow-600");
    input.classList.remove("placeholder-yellow-600");
}