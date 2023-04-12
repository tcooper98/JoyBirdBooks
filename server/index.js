import dotenv from 'dotenv';
import connectToDatabase from './database.js';
import express from 'express';
import Contact from './models/contact.js';
import Donate from './models/donate.js';

//Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import donateRoutes from './routes/donateRoutes.js';

dotenv.config();
connectToDatabase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/donate', donateRoutes);


// rout handels for form submissions
app.post('/api/donate', async (req, res) => {
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
        res.status(500).json({ message: 'Failed to save donation' });
    }
});


app.post('/api/contact', async (req, res) => {
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

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
