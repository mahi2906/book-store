const bookService = require("./bookService");
const successHandler = require("../../handlers/success.handler");

const createBook = async (req, res, next) => {
  try {
    const result = await bookService.createBook(req.body);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const result = await bookService.getBookById(req.params.bookId);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const result = await bookService.updateBook(req.params.bookId, req.body);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const result = await bookService.deleteBook(req.params.bookId);
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

const addReviewOrRatingController = async (req, res, next) => {
  try {
    const { bookId } = req.params;
    const { review, rating } = req.body;
    const result = await addReviewOrRating(bookId, { review, rating });
    return successHandler(result, req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
