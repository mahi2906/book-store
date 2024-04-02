const revenueService = require("./revenueService");
const successHandler = require("../../handlers/success.handler");

const getRevenueByAuthorIdController = async (req, res, next) => {
  try {
    const result = await revenueService.getRevenueByAuthorId(
      req.params.authorId
    );
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRevenueByAuthorIdController,
};
