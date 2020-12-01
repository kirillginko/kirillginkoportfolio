const express = require('express');
require('dotenv').config();
const sendMail = require('./mail');
const app = express();

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));

// Data parsing
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json({}));

// email form submit
app.post('/email', (req, res) => {
  // send email
  const {name, email, text } = req.body;
  console.log('Data:', req.body);

  sendMail(name, email, text, function(err, data) {
    if (err) {
      res.status(500).json({message: err});
      console.log(err);
    } else {
      res.json({message: "message sent!"});
    }
  });
  // res.json({message: 'Message received'})
});
