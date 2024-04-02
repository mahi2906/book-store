const Joi = require('joi');

const createPurchaseSchema = Joi.object({
  bookId: Joi.string().required(),
  userId: Joi.string().required(),
  purchaseDate: Joi.date().iso().required(),
  price: Joi.number().min(100).max(1000).required(),
  quantity: Joi.number().integer().min(1).required(),
});

const updatePurchaseSchema = Joi.object({
  bookId: Joi.string(),
  userId: Joi.string(),
  purchaseDate: Joi.date().iso(),
  price: Joi.number().min(100).max(1000),
  quantity: Joi.number().integer().min(1),
});

module.exports = { createPurchaseSchema, updatePurchaseSchema };
