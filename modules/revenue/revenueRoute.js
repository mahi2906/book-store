const express = require("express");
const router = express.Router();
const revenueController = require("./revenueController");
const validator = require("../../handlers/validator");

module.exports = (router) => {
  router.get(
    "/revenue/:authorId",
    validator.validateToken,
    revenueController.getRevenueByAuthorIdController
  );
};
