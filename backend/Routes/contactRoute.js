import express from 'express';
import { sendEmail } from '../Controllers/contactController.js';

const router = express.Router();

// Route for sending email
router.post('/send-email', sendEmail);

export default router;
