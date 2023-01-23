const form = document.getElementById("form");
const firstNameInput = document.querySelector("[data-first-name]");
const lastNameInput = document.querySelector("[data-last-name]");
const emailInput = document.querySelector("[data-email]");
const passwordInput = document.querySelector("[data-password]");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function error(element, message) {
  const inputBar = element.parentElement;
  const inputController = inputBar.parentElement;
  const errorDisplay = inputController.querySelector(".error");

  inputBar.querySelector(".error-icon").classList.add("visible");
  inputBar.classList.add("highlight");
  errorDisplay.innerHTML = message;
}

function success(element) {
  const inputBar = element.parentElement;
  const inputController = inputBar.parentElement;
  const errorDisplay = inputController.querySelector(".error");

  inputBar.querySelector(".error-icon").classList.remove("visible");
  inputBar.classList.remove("highlight");
  errorDisplay.innerHTML = null;
}

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validateInputs() {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (firstName === "") {
    error(firstNameInput, "First name is required");
  } else {
    success(firstNameInput);
  }

  if (lastName === "") {
    error(lastNameInput, "Last name is required");
  } else {
    success(lastNameInput);
  }

  if (email === "") {
    error(emailInput, "Email is required");
  } else if (!isValidEmail(email)) {
    error(emailInput, "email not valid");
    console.log("email not valid");
  } else {
    success(emailInput);
  }

  if (password === "") {
    error(passwordInput, "Password is required");
  } else {
    success(passwordInput);
  }
}
