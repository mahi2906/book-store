const Book = require("../../models/book");

const createBook = async (newData) => {
  const result = {
    status: 0,
    message: "",
    data: null,
  };
  try {
    const lastBook = await Book.findOne({ order: [["id", "DESC"]] });
    let bookId = "book-1";
    if (lastBook) {
      const lastBookId = parseInt(lastBook.bookId.split("-")[1]);
      bookId = `book-${lastBookId + 1}`;
    }

    const book = await Book.create({ ...newData, bookId });
    result.data = book;
    result.status = 1;
    result.message = "Book Added Successfully";
    return result;
  } catch (error) {
    result.status = error.status;
    result.message = error.message;
    return result;
  }
};

const getBookById = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId);
    if (!book) {
      result.message = "Book not found";
      return result;
    }
    result.data = book;
    result.status = 1;
    result.message = "Book Details Show Successful";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const updateBook = async (bookId, newData) => {
  try {
    const book = await Book.findByPk(bookId);
    if (!book) {
      result.message = "Book not found";
      return result;
    }
    const updatedData = await book.update(newData);
    result.data = updatedData;
    result.status = 1;
    result.message = "Book Details Updated Successful";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const deleteBook = async (bookId) => {
  try {
    const book = await Book.findByPk(bookId);
    if (!book) {
      result.message = "Book not found";
      return result;
    }
    await book.destroy();
    result.status = 1;
    result.message = "Book deleted successfully";
    return result;
  } catch (error) {
    result.status = error.status;
    result.data = error.message;
  }
};

const addReviewOrRating = async (bookId, reviewOrRating) => {
  try {
    const book = await Book.findByPk(bookId);
    if (!book) {
      throw new Error("Book not found");
    }

    let updatedBook;
    if (reviewOrRating.rating) {
      updatedBook = await book.update({
        totalRatings: book.totalRatings + 1,
      });
    } else {
      updatedBook = await book.update({
        totalReviews: book.totalReviews + 1,
      });
    }

    const newAverageRating = calculateAverageRating(
      updatedBook,
      reviewOrRating.rating
    );

    const finalBook = await updatedBook.update({
      averageRating: newAverageRating,
    });

    result.data = finalBook;
    result.status = 1;
    result.message ="Review or rating added successfully.";
  } catch (error) {
    throw error;
  }
};

const calculateAverageRating = (book, newRating) => {
  const totalRatings = book.totalRatings;
  const currentAverageRating = book.averageRating;
  const newAverageRating =
    (currentAverageRating * totalRatings + newRating) / (totalRatings + 1);
  return newAverageRating;
};

module.exports = {
  createBook,
  getBookById,
  updateBook,
  deleteBook,
  addReviewOrRating
};
