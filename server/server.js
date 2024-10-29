// server/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log("Received data:", req.body); 

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    console.log("Email:", process.env.EMAIL);
    console.log("Password:", process.env.PASSWORD);

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'Registration Confirmation',
      text: `Hello ${name},\n\nThank you for registering for the event!\n\nEvent Details:\n${message}\n\nWe look forward to seeing you!\n`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Registration successful and confirmation email sent!');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send(`Error sending confirmation email: ${error.message}`);
    }
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
