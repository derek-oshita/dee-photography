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

const handleInvalidInput = (value, div) => {
  if (value.length < 2) {
    div.style.display = "block";
    div.innerHTML = invalidText;
  }

  if (value.length >= 2) {
    div.style.display = "none";
    switch (div) {
      case invalidNameDiv:
        nameFieldIsValid = true;
        console.log("nameFieldIsValid", nameFieldIsValid);
    }
  }
};

// NAME FIELD
nameField.addEventListener("input", () => {
  let nameVal = nameField.value;
  handleInvalidInput(nameVal, invalidNameDiv);
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

// INPUT FIELD
subjectField.addEventListener("input", () => {
  let subjectVal = subjectField.value;

  if (subjectVal.length < 2) {
    invalidSubjectDiv.style.display = "block";
    invalidSubjectDiv.innerHTML = invalidText;
  }

  if (subjectVal.length >= 2) {
    invalidSubjectDiv.style.display = "none";
    subjectFieldIsValid = true;
  }
});

disableSubmitOnEmptyFields();
