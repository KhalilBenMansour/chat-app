const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
  var config = {
    host: process.env.HOST,
    service: process.env.SERVICE,
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  };
  try {
    const transporter = nodemailer.createTransport(config);

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      text: text,
    });
    console.log("email sent sucessfully");
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

module.exports = sendEmail;
