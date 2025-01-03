import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', // Assuming you have a Category model
        required: true
    },
    sizes: [{
        name: {
            type: String,
            required: true
        },
    }],
    colors: [{
        name: {
            type: String,
            required: true
        },
        hexCode: {
            type: String, // Optional, if you want to store color codes
            required: false
        },
    }],
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    images: [{
        type: String, // URL of product images
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});


const Product = mongoose.model('Product', productSchema);

export default Product;
