import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    hexCode: {
        type: String, // Optional, if you want to store the color code
        required: false,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Color = mongoose.model('Color', colorSchema);

export default Color;
