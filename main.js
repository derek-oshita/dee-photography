// FORM VALIDATION ////////////////////////////////////////

const form = document.getElementById("input-form"),
  nameField = document.getElementById("input-name"),
  emailField = document.getElementById("input-email"),
  subjectField = document.getElementById("input-subject"),
  messageField = document.getElementById("input-message"),
  submitBtn = document.getElementById("submit-btn");

const invalidNameDiv = document.getElementById("invalid-name"),
  invalidEmailDiv = document.getElementById("invalid-email"),
  invalidSubjectDiv = document.getElementById("invalid-subject"),
  invalidMessageDiv = document.getElementById("invalid-message");

let nameFieldIsValid = false,
  emailFieldIsValid = false,
  subjectFieldIsValid = false,
  messageFieldIsValid = false;

const invalidText = "Please enter at least 2 characters",
  invalidEmail = "Please enter a valid email address";

const checkInputField = (field, value) => {
  field === emailField
    ? toggleEmailNotification(value)
    : toggleTextNotification(value, field);
};

const toggleEmailNotification = (value) => {
  if (value.length < 5 || !value.includes("@")) {
    invalidEmailDiv.style.display = "block";
    invalidEmailDiv.innerHTML = invalidEmail;
    console.log("emailField", emailFieldIsValid);
  } else {
    invalidEmailDiv.style.display = "none";
    emailFieldIsValid = true;
    console.log("emailField", emailFieldIsValid);
  }
};

const toggleTextNotification = (value, field) => {
  if (value.length < 2) {
    switch (field) {
      case nameField:
        invalidNameDiv.style.display = "block";
        invalidNameDiv.innerHTML = invalidText;
        nameFieldIsValid = false;
        break;
      case subjectField:
        invalidSubjectDiv.style.display = "block";
        invalidSubjectDiv.innerHTML = invalidText;
        subjectFieldIsValid = false;
        break;
      case messageField:
        invalidMessageDiv.style.display = "block";
        invalidMessageDiv.innerHTML = invalidText;
        messageFieldIsValid = false;
        break;
    }
  } else {
    switch (field) {
      case nameField:
        invalidNameDiv.style.display = "none";
        nameFieldIsValid = true;
        console.log("nameField", nameFieldIsValid);
        break;
      case subjectField:
        invalidSubjectDiv.style.display = "none";
        subjectFieldIsValid = true;
        console.log("subjectField", subjectFieldIsValid);
        break;
      case messageField:
        invalidMessageDiv.style.display = "none";
        messageFieldIsValid = true;
        console.log("messageField", messageFieldIsValid);
        break;
    }
  }
};

const canSubmit = () => {
  if (
    nameFieldIsValid === true &&
    emailFieldIsValid === true &&
    subjectFieldIsValid === true &&
    messageFieldIsValid === true
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
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

// SUBJECT FIELD
subjectField.addEventListener("input", () => {
  let subjectVal = subjectField.value;
  checkInputField(subjectField, subjectVal);
});

// MESSAGE FIELD
messageField.addEventListener("input", () => {
  let messageVal = messageField.value;
  checkInputField(messageField, messageVal);
});

submitBtn.addEventListener("click", () => {
  console.log("clicked");
});

// need to conditionally enable the submit button when all of the flags are true
