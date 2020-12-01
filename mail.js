const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
require('dotenv').config();
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  },
  // proxy: 'http://user:pass@localhost:8080' // optional proxy, default is false
}

const nodemailerMailgun = nodemailer.createTransport(mg(auth));

const sendMail = (name, email, text, cb) => {
  const mailOptions = {
  subject: name,
  from: email,
  to: 'kirillginko@gmail.com',
  text
};

nodemailerMailgun.sendMail(mailOptions, (err, data) => {
  if (err) {
    cb(err, null)
    // console.log(`Error: ${err}`);
  }
  else {
    cb(null, data)
    // console.log(`Response: Success`);
    }
  });
}

module.exports = sendMail;
