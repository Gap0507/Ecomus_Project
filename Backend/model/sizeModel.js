import mongoose from 'mongoose';

const sizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String, // Optional description for the size (e.g., Small, Medium, Large)
        required: false,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Size = mongoose.model('Size', sizeSchema);

export default Size;
