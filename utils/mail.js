const nodemailer = require("nodemailer");
var path = require("path");
var fs = require("fs");
const { getTestMessageUrl } = require("nodemailer");
const {
  SMTP_HOST,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  SMTP_PORT,
  EMAIL_FROM,
} = require("../config");

sendEmail = async (data, file, email, subject, email) => {
  var mailConfig;
  mailConfig = {
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD,
    },
  };
  try {
    const transporter = nodemailer.createTransport(mailConfig);
    const dirname = path.resolve();
    const filePath = path.join(dirname, "/utils/emailTemplate/" + file);
    const fileData = fs.readFileSync(filePath, "utf8");
    let info = await transporter.sendMail({
      from: EMAIL_FROM,
      to: email,
      subject,
      html: replaceContent(data, fileData),
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", getTestMessageUrl(info));
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

replaceContent = (data, html) => {
  for (var key in data) {
    if (!data.hasOwnProperty(key)) {
      continue;
    }

    const findKey = new RegExp(`{{${key}}}`, "g");
    html = html.replace(findKey, data[key]);
  }

  return html;
};

module.exports = {
  sendEmail,
};
