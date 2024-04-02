const Sequelize = require("sequelize");
const { MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } = require(".");

const db = {};
  const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: "mysql",
  timezone:"+05:30",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 100000,
    idle: 20000
  },
  define: {
    freezeTableName: true,
    plain: true
  },dialectOptions: {
    dateStrings: true,
    typeCast: function (field, next) {
      if (field.type === 'DATETIME') {
        return field.string()
      }
        return next()
      },
  },
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
