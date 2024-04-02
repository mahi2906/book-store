const express = require("express");
const router = express.Router();
const validator = require("../../handlers/validator");
const bookController = require("./bookController");

module.exports = (router) => {
  router.post("/books", validator.validateToken, bookController.createBook);
  router.get(
    "/books/:bookId",
    validator.validateToken,
    bookController.getBookById
  );
  router.put(
    "/books/:bookId",
    validator.validateToken,
    bookController.updateBook
  );
  router.delete(
    "/books/:bookId",
    validator.validateToken,
    bookController.deleteBook
  );
  router.post("/:bookId/review-or-rating", addReviewOrRatingController);
};
