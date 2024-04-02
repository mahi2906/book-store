const PurchaseHistory = require("../../models/purchaseHistory");

const createPurchaseRecord = async (newData) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const purchase = await PurchaseHistory.create(newData);
    result.data = purchase;
    result.status = 1;
    result.message = "Purchase record created successfully";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const getPurchaseRecordById = async (purchaseId) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const purchase = await PurchaseHistory.findByPk(purchaseId);
    if (!purchase) {
      result.message = "Purchase record not found";
    } else {
      result.status = 1;
      result.data = purchase;
      result.message = "Purchase record retrieved successfully";
    }
    return result;
  } catch (error) {
    throw error;
  }
};
const updatePurchaseRecord = async (purchaseId, newData) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const purchase = await PurchaseHistory.findByPk(purchaseId);
    if (!purchase) {
      result.message = "Purchase record not found";
    } else {
      await purchase.update(newData);
      result.status = 1;
      result.data = purchase;
      result.message = "Purchase record updated successfully";
    }
    return result;
  } catch (error) {
    throw error;
  }
};

const deletePurchaseRecord = async (purchaseId) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const purchase = await PurchaseHistory.findByPk(purchaseId);
    if (!purchase) {
      result.message = "Purchase record not found";
    } else {
      await purchase.destroy();
      result.status = 1;
      result.message = "Purchase record deleted successfully";
    }
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPurchaseRecord,
  getPurchaseRecordById,
  updatePurchaseRecord,
  deletePurchaseRecord,
};
