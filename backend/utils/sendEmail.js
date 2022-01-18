const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "smpt.gmial.com",
    port: 465,
    service: process.env.SMPT_SERVICE,

    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mialOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mialOptions);
};

module.exports = sendEmail;
