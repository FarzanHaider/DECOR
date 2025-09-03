import nodemailer from 'nodemailer';

// Function to send email
export const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', 
            pass: 'your-password' 
        }
    });

    // Email message options
    const mailOptions = {
        from: 'your-email@gmail.com', 
        to: 'khadijanaveed6300@gmail.com', 
        subject: 'Contact Form Submission',
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}
        `
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
};
