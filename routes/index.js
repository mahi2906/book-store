const book = require("../modules/book/bookRoute");
const purchaseHistory = require("../modules/purchaseHistory/purchaseHistoryRoute");
const revenue = require("../modules/revenue/revenueRoute");
const user = require("../modules/user/userRoute");

module.exports = (router) => {
  book(router);
  purchaseHistory(router);
  revenue(router);
  user(router);
  return router;
};
