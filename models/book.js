const { DataTypes } = require('sequelize');
const db = require("../config/database");

const Book = db.sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bookId:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 100,
      max: 1000,
    },
  },
  averageRating: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
  totalRatings: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  totalReviews: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  sellCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  authors: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  hooks: {
    beforeCreate: (book) => {
      book.sellCount = 0;
    },
  },
});

Book.afterCreate(async (book, options) => {
  const purchases = await book.getPurchases();
  book.sellCount = purchases.length;
  await book.save({ fields: ['sellCount'] });
});

module.exports = Book;