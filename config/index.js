require("dotenv").config();
module.exports = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,

  DEFAULT_OTP: process.env.DEFAULT_OTP,

  //Mysql config
  MYSQL_DB: process.env.MYSQL_DB,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,


  //SMTP config
  // SMTP_HOST: process.env.SMTP_HOST,
  // SMTP_PORT: process.env.SMTP_PORT,
  // SMTP_USERNAME: process.env.SMTP_USERNAME,
  // SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  // EMAIL_FROM: process.env.EMAIL_FROM,
};