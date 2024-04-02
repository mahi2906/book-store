const Joi = require("joi");

const sendRevenueNotificationSchema = Joi.object({
  authorId: Joi.string().required(),
  email: Joi.string().email().required(),
  currentMonthRevenue: Joi.number().min(0).required(),
  currentYearRevenue: Joi.number().min(0).required(),
  totalRevenue: Joi.number().min(0).required(),
});

module.exports = { sendRevenueNotificationSchema };
