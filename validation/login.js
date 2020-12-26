const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.handle = validText(data.handle) ? data.handle : '';
  data.password = validText(data.password) ? data.password : '';

  if (!Validator.isLength(data.handle, {min: 5, max: 15})) {
    errors.handle = 'Username is invalid.';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.handle = 'Username cannot be empty.';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};