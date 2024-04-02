const { DataTypes } = require('sequelize');
const db = require("../config/database");

const revenueModel = db.sequelize.define('Revenue', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  month: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  revenue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = revenueModel;