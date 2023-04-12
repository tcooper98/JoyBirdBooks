import express from 'express';
import Donate from '../models/donate.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { donateOrTrade, firstName, lastName, email, bookTitle, bookAuthor, bookEdition, bookIsbn, bookCondition, coverType } = req.body;
    const donate = new Donate({
        donateOrTrade,
        firstName,
        lastName,
        email,
        bookTitle,
        bookAuthor,
        bookEdition,
        bookIsbn,
        bookCondition,
        coverType,
    });
    try {
        const savedDonate = await donate.save();
        res.json(savedDonate);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to save' });
    }
});

export default router;
