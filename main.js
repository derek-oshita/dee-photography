// FORM VALIDATION ////////////////////////////////////////

const form = document.getElementById("input-form"),
  nameField = document.getElementById("input-name"),
  emailField = document.getElementById("input-email"),
  subjectField = document.getElementById("input-subject"),
  messageFieldd = document.getElementById("input-message"),
  submitBtn = document.getElementById("submit-btn");

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

submitBtn.addEventListener("click", () => {
  console.log("clicked");
});

disableSubmitOnEmptyFields();
