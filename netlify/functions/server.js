const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

var app = express();
app.use(express.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Configure the transporter for your email service
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    secure: true,
    service: 'Gmail',
    auth: {
      user: 'snejhirpara123@gmail.com',
      pass: 'fdfe bkvj gpyg cpgp',
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'snejhirpara123@gmail.com', // Change this to the recipient email address
    subject: 'New contact form submission',
    html: `
      <h3>Contact Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <h3>Message:</h3>
      <p>${message}</p>
      <p>${email}</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }

    const senderMailOptions = {
      ...mailOptions,
      to: email,
      subject: 'Copy: New contact form submission',
    };

    transporter.sendMail(senderMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending copy of email:', error);
      } else {
        console.log('Email sent to sender:', info.response);
      }
    });

    res.sendStatus(200);
  });
});

const port = 3001; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});