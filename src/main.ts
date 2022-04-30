import './style.css'


const form = document.querySelector("form");
form?.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
});

const emailError = document.querySelector(".email-error");
const email = document.querySelector("#email") as HTMLInputElement;
const emailFormat = /[a-zA-Z0-9]+@bigcorp.eu/
email?.addEventListener("input", () => {
    const emailValid = emailFormat.exec(email.value)
    if (emailValid) {
        emailError!.textContent = "";
        emailError!.className = "errormessage";
    } else {
        showEmailError();
    }
});

function showEmailError() {
    const emailValid = emailFormat.exec(email.value)
    if (email.validity.valueMissing) {
        emailError!.textContent = "You need to enter an e-mail address.";
    } else if (!emailValid) {
        emailError!.textContent = "The email address should consist of one or more letters (lower or upper case) or numbers, followed by '@bigcorp.eu'";
    }
    emailError!.className = "errormessage active";
}


const username = document.querySelector("#uname") as HTMLInputElement
const usernameError = document.querySelector(".username-error")
const usernameFormat = /[a-z]\.[a-z0-9]{3,}/
username?.addEventListener("input", () => {
        const usernameOk = usernameFormat.exec(username.value)

        if (usernameOk) {
            usernameError!.textContent = "";
            usernameError!.className = "errormessage";
        } else {
            showUsernameError()
        }
    }
)

function showUsernameError() {
    const usernameOk = usernameFormat.exec(username.value)
    if (username.validity.valueMissing) {
        usernameError!.textContent = "You need to enter a username.";

    } else if (!usernameOk) {
        usernameError!.textContent = "User names should consist of a single letter, followed by a dot, followed by three or more letters or numbers. All letters should be lowercase.";
    }
    usernameError!.className = "errormessage active"
}

const phoneNumber = document.querySelector("#phone") as HTMLInputElement
const phoneNumberError = document.querySelector(".phone-error")
const phoneFormat = /\d{10}|\d{3}([.\/ ])\d{3}\1\d{4}/
phoneNumber?.addEventListener("input", () => {

    const phoneValid = phoneFormat.exec(phoneNumber.value)
    if (phoneValid) {
        phoneNumberError!.textContent = "";
        phoneNumberError!.className = "errormessage";
    } else {
        showPhoneError()
    }
})


function showPhoneError() {
    const phoneValid = phoneFormat.exec(phoneNumber.value)
    if (phoneNumber.validity.valueMissing) {
        phoneNumberError!.textContent = "You need to enter a phone number.";

    } else if (!phoneValid) {
        phoneNumberError!.textContent = "Phone number should consist of either 10 digits in a row, or a pattern of three digits, three digits, then four digits, separated by either spaces, dashes, or dots."
        phoneNumberError!.className = "errormessage active"
    }
}