const Joi = require('joi');

const createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().valid('Author', 'Admin', 'Retail User').required(),
});

const loginValidation = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

const updateUserSchema = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  role: Joi.string().valid('Author', 'Admin', 'Retail User'),
});

module.exports = { createUserSchema,loginValidation, updateUserSchema };
