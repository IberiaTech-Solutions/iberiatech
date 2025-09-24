# Contact Form Setup Guide

## EmailJS Configuration

To make your contact form functional, you need to set up EmailJS:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from your IberiaTech Solutions contact form.
```

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Update Contact Form
Replace these placeholders in `components/ContactSection.tsx`:

```typescript
// Replace these with your actual EmailJS credentials:
emailjs.init('YOUR_PUBLIC_KEY') // Your EmailJS public key
'YOUR_SERVICE_ID' // Your EmailJS service ID  
'YOUR_TEMPLATE_ID' // Your EmailJS template ID
```

### 6. Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email for the message

## Alternative: Simple API Route (No EmailJS)

If you prefer not to use EmailJS, I can help you set up a Next.js API route with Nodemailer instead.

## Security Notes
- EmailJS public key is safe to use in frontend code
- Never expose service credentials in client-side code
- Consider adding rate limiting for production use
