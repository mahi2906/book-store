const { DataTypes } = require('sequelize');
const db = require("../config/database");
const { sequelize } = db;

const PurchaseHistory = sequelize.define('PurchaseHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  purchaseId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'compositeIndex',
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'compositeIndex',
  },
  purchaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['bookId', 'userId', 'purchaseDate'],
    },
  ],
  hooks: {
    beforeValidate: (purchaseHistory, options) => {
      if (!purchaseHistory.purchaseId) {
        purchaseHistory.purchaseId = generatePurchaseId();
      }
    },
  },
});

const generatePurchaseId = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const numericIncrement = 1;
  return `${year}-${month}-${numericIncrement}`;
};

module.exports = PurchaseHistory;
