const Revenue = require("../../models/revenue");

const getRevenueByAuthorId = async (authorId) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const revenue = await Revenue.findOne({ where: { authorId } });
    result.status = 200;
    result.message = "Revenue retrieved successfully";
    result.data = revenue;
    return result;
  } catch (error) {
    result.status = 500;
    result.message = error.message;
    return result;
  }
};


module.exports = {
  getRevenueByAuthorId,
};
