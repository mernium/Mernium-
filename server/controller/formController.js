import nodemailer from 'nodemailer';

// Create transporter function to ensure env vars are loaded
const getTransporter = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        throw new Error('Email credentials are not configured. Please set EMAIL_USER and EMAIL_PASSWORD in your .env file.');
    }

    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    });
};

export const submitForm = async (req, res) => {
    try {
        const { name, email, phone, batch, background, motivation } = req.body;

        // Validate required fields
        if (!name || !email || !phone) {
            return res.status(400).json({ 
                error: 'Missing required fields: name, email, and phone are required' 
            });
        }

        // Validate email credentials exist
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('Email credentials missing from environment variables');
            return res.status(500).json({ 
                error: 'Server configuration error: Email service not configured',
                message: 'Please contact the administrator' 
            });
        }

        const transporter = getTransporter();

        const mailOptions = {
            from: `Mernium Learn <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: 'New Application',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBatch: ${batch || 'Not specified'}\nBackground: ${background || 'Not specified'}\nMotivation: ${motivation || 'Not specified'}`,
            html: `
                <h2>New Application Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Batch:</strong> ${batch || 'Not specified'}</p>
                <p><strong>Background:</strong> ${background || 'Not specified'}</p>
                <p><strong>Motivation:</strong> ${motivation || 'Not specified'}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        
        res.status(200).json({ 
            success: true, 
            message: 'Email sent successfully',
            messageId: info.messageId 
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ 
            error: 'Error sending email',
            message: error.message 
        });
    }
};
