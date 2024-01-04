const fnameEl = document.querySelector("#fname");
const emailEl = document.querySelector("#email");
const businessEl = document.querySelector("#business");
const servicesEl = document.querySelector("#services");
const ctaEl = document.querySelector("#cta");
const managerEl = document.querySelector("#manager");
const budgetEl = document.querySelector("#budget");

const form = document.querySelector("#inquiry");

const isRequired = (value) => (value === "" ? false : true);
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// Validate Name
const checkName = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const fname = fnameEl.value.trim();

  if (!isRequired(fname)) {
    showError(fnameEl, "Name cannot be blank.");
  } else {
    showSuccess(fnameEl);
    valid = true;
  }
  return valid;
};

// Check Email
const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, "Email cannot be blank.");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Email is not valid.");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

// Validate Business
const checkBusiness = () => {
  let valid = false;
  const business = businessEl.value.trim();
  if (!isRequired(business)) {
    showError(businessEl, "Business cannot be blank.");
  } else {
    showSuccess(businessEl);
    valid = true;
  }
  return valid;
};

// Validate Services
const checkServices = () => {
  let valid = false;
  const services = servicesEl.value.trim();
  if (!isRequired(services)) {
    showError(servicesEl, "Services cannot be blank.");
  } else {
    showSuccess(servicesEl);
    valid = true;
  }
  return valid;
};

// Validate Cta
const checkCta = () => {
  let valid = false;
  const cta = ctaEl.value.trim();
  if (!isRequired(cta)) {
    showError(ctaEl, "Finish the sentence.");
  } else {
    showSuccess(ctaEl);
    valid = true;
  }
  return valid;
};

// Validate Maintenance

const checkManager = () => {
  let valid = false;
  const manager = managerEl.value.trim();

  if (manager === "selectOption") {
    showError(managerEl, "Select a website manager.");
  } else {
    showSuccess(managerEl);
    valid = true;
  }
  return valid;
};

// Validate Budget
const checkBudget = () => {
  let valid = false;
  const budget = budgetEl.value.trim();

  if (budget === "selectOption") {
    showError(budgetEl, "Select a budget option.");
  } else {
    showSuccess(budgetEl);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate forms
  let isNameValid = checkName(),
    isEmailValid = checkEmail(),
    isBusinessValid = checkBusiness(),
    isServicesValid = checkServices(),
    isCtaValid = checkCta(),
    isManagerValid = checkManager();
  isBudgetValid = checkBudget();

  let isFormValid =
    isNameValid &&
    isEmailValid &&
    isBusinessValid &&
    isServicesValid &&
    isCtaValid &&
    isManagerValid &&
    isBudgetValid;

  // submit to the server if the form is valid
  if (isFormValid) {
    form.submit();
  }
});
