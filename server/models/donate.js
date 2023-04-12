import mongoose from 'mongoose';

const donateSchema = new mongoose.Schema({
    donateOrTrade: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    bookTitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    bookEdition: { type: String, required: true },
    bookIsbn: { type: String, required: true },
    bookCondition: { type: String, required: true },
    coverType: { type: String, required: true },
}, {
    timestamps: true,
});

const Donate = mongoose.model('Donate', donateSchema);

export default Donate;
