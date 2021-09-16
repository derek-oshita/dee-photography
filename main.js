// FORM VALIDATION ////////////////////////////////////////

const form = document.getElementById("input-form"),
  nameField = document.getElementById("input-name"),
  emailField = document.getElementById("input-email"),
  subjectField = document.getElementById("input-subject"),
  messageFieldd = document.getElementById("input-message"),
  submitBtn = document.getElementById("submit-btn");

const invalidNameDiv = document.getElementById("invalid-name"),
  invalidEmailDiv = document.getElementById("invalid-email");

let nameFieldIsValid = false,
  emailFieldIsValid = false,
  subjectFieldIsValid = false,
  messageFieldIsValid = false;

const invalidText = "Please enter at least 2 characters",
  invalidEmail = "Please enter a valid email address";

const disableSubmitOnEmptyFields = () => {
  if (
    !nameField.value ||
    !emailField.value ||
    !subjectField.value ||
    !messageFieldd.value
  ) {
    submitBtn.disabled = true;
  }
};

// NAME FIELD
nameField.addEventListener("input", () => {
  let nameVal = nameField.value;

  if (nameVal.length < 2) {
    invalidNameDiv.style.display = "block";
    invalidNameDiv.innerHTML = invalidText;
  }

  if (nameVal.length >= 2) {
    invalidNameDiv.style.display = "none";
    nameFieldIsValid = true;
  }
});

// EMAIL FIELD
emailField.addEventListener("input", () => {
  let emailVal = emailField.value;

  if (emailVal.length < 2) {
    invalidEmailDiv.style.display = "block";
    invalidEmailDiv.innerHTML = invalidEmail;
  }

  if (emailVal.length >= 2 && emailVal.includes("@")) {
    invalidEmailDiv.style.display = "none";
    emailFieldIsValid = true;
  }
});

disableSubmitOnEmptyFields();
