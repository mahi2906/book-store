const express = require("express");
const router = express.Router();
const purchaseController = require("./purchaseHistoryController");
const validator = require("../../handlers/validator");

module.exports = (router) => {
  router.post(
    "/purchases",
    validator.validateToken,
    purchaseController.createPurchaseRecordController
  );
  router.get(
    "/purchases/:purchaseId",
    validator.validateToken,
    purchaseController.getPurchaseRecordByIdController
  );
  router.put(
    "/purchases/:purchaseId",
    validator.validateToken,
    purchaseController.updatePurchaseRecordController
  );
  router.delete(
    "/purchases/:purchaseId",
    validator.validateToken,
    purchaseController.deletePurchaseRecordController
  );
};
