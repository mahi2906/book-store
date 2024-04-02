const Joi = require("joi");

const createBookSchema = Joi.object({
  title: Joi.string().required(),
  authors: Joi.array().items(Joi.string()).min(1).required(),
  sellCount: Joi.number().integer().min(0).required(),
  description: Joi.string().required(),
  price: Joi.number().min(100).max(1000).required(),
});

const updateBookSchema = Joi.object({
  title: Joi.string(),
  authors: Joi.array().items(Joi.string()).min(1),
  sellCount: Joi.number().integer().min(0),
  description: Joi.string(),
  price: Joi.number().min(100).max(1000),
});

module.exports = { createBookSchema, updateBookSchema };
