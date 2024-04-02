const { DataTypes } = require('sequelize');
const db = require("../config/database");

const userModel = db.sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Author', 'Admin', 'Retail User'),
    allowNull: false,
    defaultValue: 'Retail User',
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
  },
  last_login_at: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

module.exports = userModel;
