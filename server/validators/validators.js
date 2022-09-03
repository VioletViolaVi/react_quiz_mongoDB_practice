const isEmpty = require("is-empty");
const validator = require("validator");

const registerValidator = (data) => {
  const errors = {};

  // if undefined or null it will be set to empty string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";

  const emailError = validator.isEmpty(data.email)
    ? "Email is required"
    : !validator.isEmail(data.email)
    ? "Please provide a valid email"
    : "";
  const passwordError = validator.isEmpty(data.password)
    ? "Password is required"
    : "";
  const firstNameError = validator.isEmpty(data.firstName)
    ? "First name is required"
    : "";
  const lastNameError = validator.isEmpty(data.lastName)
    ? "Last name is required"
    : "";

  if (emailError) {
    errors.email = emailError;
  }

  if (passwordError) {
    errors.password = passwordError;
  }

  if (firstNameError) {
    errors.firstName = "First name is required";
  }

  if (lastNameError) {
    errors.lastName = "Last name is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

const loginValidator = (data) => {
  const errors = {};

  // if undefined or null it will be set to empty string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  const emailError = validator.isEmpty(data.email)
    ? "Email is required"
    : !validator.isEmail(data.email)
    ? "Please provide a valid email"
    : "";
  const passwordError = validator.isEmpty(data.password)
    ? "Password is required"
    : "";

  if (emailError) {
    errors.email = emailError;
  }

  if (passwordError) {
    errors.password = passwordError;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = { registerValidator, loginValidator };
