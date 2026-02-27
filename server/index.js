require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
}))
app.use(express.json())

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running' })
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    // Create transporter — using Gmail with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (NOT your regular password)
      },
    })

    // Email to you (notification)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;
          border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: #6366F1; padding: 24px 28px;">
            <h2 style="margin: 0; color: #fff; font-size: 20px;">New Contact Form Message</h2>
          </div>
          <div style="padding: 28px;">
            <p style="margin: 0 0 12px; font-size: 15px; color: #333;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="margin: 0 0 12px; font-size: 15px; color: #333;">
              <strong>Email:</strong> <a href="mailto:${email}">${email}</a>
            </p>
            <p style="margin: 0 0 8px; font-size: 15px; color: #333;">
              <strong>Message:</strong>
            </p>
            <div style="background: #f9f9f9; border-radius: 8px; padding: 16px;
              font-size: 15px; color: #444; line-height: 1.6;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Ziyaurrahman" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! ✨`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;
          border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: #6366F1; padding: 24px 28px;">
            <h2 style="margin: 0; color: #fff; font-size: 20px;">Thanks for your message!</h2>
          </div>
          <div style="padding: 28px;">
            <p style="font-size: 15px; color: #333; line-height: 1.6;">
              Hi <strong>${name}</strong>,<br><br>
              Thank you for contacting me! I've received your message and will
              get back to you as soon as possible.<br><br>
              Best regards,<br>
              <strong>Ziyaurrahman</strong><br>
              Full Stack Developer
            </p>
          </div>
        </div>
      `,
    })

    res.json({ success: true, message: 'Message sent successfully!' })
  } catch (error) {
    console.error('Email error:', error.message)
    console.error('Full error:', JSON.stringify(error, null, 2))
    res.status(500).json({ error: 'Failed to send email. Please try again later.', detail: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`)
})
