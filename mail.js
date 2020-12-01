const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const auth = {
  auth: {
    api_key: 'key-bc3a71bf47de9a619a1fd165e68b2f95',
    domain: 'sandbox0d9ef26008b34a7a92a140fcbff84329.mailgun.org'
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
