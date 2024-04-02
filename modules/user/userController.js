const userService = require("./userService");
const successHandler = require("../../handlers/success.handler");

const createUserC = async (req, res, next) => {
  try {
    let body = req.body;
    let result = await userService.createUser(body);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const getUserByIdC = async (req, res, next) => {
  try {
    const result = await userService.getUserByIdS(req.params.userId);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const updateUserC = async (req, res, next) => {
  try {
    const result = await userService.updateUserS(req.params.userId, req.body);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const deleteUserC = async (req, res, next) => {
  try {
    const result = await userService.updateUserS(req.params.userId);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserC,
  login,
  getUserByIdC,
  updateUserC,
  deleteUserC,
};
