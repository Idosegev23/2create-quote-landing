const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD
  }
});

// Test email connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('Email connection error:', error);
  } else {
    console.log('Email server is ready to take our messages');
  }
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-quote-request', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'hello@2create.co.il',
      subject: 'בקשה חדשה להצעת מחיר - 2Create',
      html: `
        <div style="font-family: Arial, sans-serif; direction: rtl; text-align: right;">
          <h2>בקשה חדשה להצעת מחיר</h2>
          <p><strong>שם:</strong> ${name}</p>
          <p><strong>אימייל:</strong> ${email}</p>
          <p><strong>טלפון:</strong> ${phone || 'לא צוין'}</p>
          <p><strong>הודעה:</strong></p>
          <p>${message || 'לא צוינה הודעה'}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'ההודעה נשלחה בהצלחה!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'שגיאה בשליחת ההודעה' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 