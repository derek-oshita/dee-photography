// FORM VALIDATION ////////////////////////////////////////

const form = document.getElementById("input-form"),
  nameField = document.getElementById("input-name"),
  emailField = document.getElementById("input-email"),
  subjectField = document.getElementById("input-subject"),
  messageFieldd = document.getElementById("input-message"),
  submitBtn = document.getElementById("submit-btn");

const invalidNameDiv = document.getElementById("invalid-name"),
  invalidEmailDiv = document.getElementById("invalid-email"),
  invalidSubjectDiv = document.getElementById("invalid-subject");

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

const checkInputField = (field, value) => {
  field === emailField
    ? console.log("email") // toggleEmailNotification
    : console.log("other"); // toggleTextNotifcation
};

// NAME FIELD
nameField.addEventListener("input", () => {
  let nameVal = nameField.value;
  checkInputField(nameField, nameVal);
});

// EMAIL FIELD
emailField.addEventListener("input", () => {
  let emailVal = emailField.value;
  checkInputField(emailField, emailVal);
});

// INPUT FIELD
subjectField.addEventListener("input", () => {
  let subjectVal = subjectField.value;
  checkInputField(subjectField, subjectVal);
});

disableSubmitOnEmptyFields();
