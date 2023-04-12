import express from 'express';
import Contact from '../models/contact.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
    const { firstName, lastName, email, subject, message } = req.body;
    const contact = new Contact({
        firstName,
        lastName,
        email,
        subject,
        message,
    });
    try {
        const savedContact = await contact.save();
        res.json(savedContact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to save contact' });
    }
});

export default router;
