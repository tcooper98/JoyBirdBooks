import dotenv from 'dotenv';
dotenv.config();
import connectToDatabase from './database.js';
import express from 'express';
import Contact from './models/contact.js';
import Donate from './models/donate.js';
import path from 'path';

//Routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import donateRoutes from './routes/donateRoutes.js';



connectToDatabase();
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/donate', donateRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));

const port = process.env.PORT || 5000

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if(process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}




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
