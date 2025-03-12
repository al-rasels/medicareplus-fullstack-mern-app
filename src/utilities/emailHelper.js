const nodemailer = require("nodemailer");
const { EMAIL_CREDENTIALS } = require("../configs/config");

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
  const transport = nodemailer.createTransport(EMAIL_CREDENTIALS);
  const mailOption = {
    from: "MediCarePlus Limited <rm.shanto786@gmail.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };
  return await transport.sendMail(mailOption);
};

module.exports = EmailSend;
