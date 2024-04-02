const purchaseHistoryService = require("./purchaseHistoryService");
const successHandler = require("../../handlers/success.handler");

const createPurchaseRecordController = async (req, res, next) => {
  try {
    const result = await purchaseHistoryService.createPurchaseRecord(req.body);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const getPurchaseRecordByIdController = async (req, res, next) => {
  try {
    const result = await purchaseHistoryService.getPurchaseRecordById(
      req.params.purchaseId
    );
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const updatePurchaseRecordController = async (req, res, next) => {
  try {
    const result = await purchaseHistoryService.updatePurchaseRecord(
      req.params.purchaseId,
      req.body
    );
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const deletePurchaseRecordController = async (req, res, next) => {
  try {
    const result = await purchaseHistoryService.deletePurchaseRecord(
      req.params.purchaseId
    );
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPurchaseRecordController,
  getPurchaseRecordByIdController,
  updatePurchaseRecordController,
  deletePurchaseRecordController,
};
