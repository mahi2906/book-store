const express = require("express");
const router = express.Router();
const validator = require("../../handlers/validator");
const userController = require("./userController");

module.exports = (router) => {
  router.post("/register", userController.createUserC);
  router.post("/login", userController.login);
  router.get(
    "/users/:userId",
    validator.validateToken,
    userController.getUserByIdC
  );
  router.put(
    "/users/:userId",
    validator.validateToken,
    userController.updateUserC
  );
  router.delete(
    "/users/:userId",
    validator.validateToken,
    userController.deleteUserC
  );
};
