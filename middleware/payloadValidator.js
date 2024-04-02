const payloadValidator = async (validator, payload = {}) => {
  try {
    return await validator.validateAsync(payload, options);
  } catch (error) {
    throw error;
  }
};

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

module.exports = {
  payloadValidator
}