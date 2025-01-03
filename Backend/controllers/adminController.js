import Marquee from "../model/marqueeModel.js";
import Category from "../model/categoriesModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Color from "../model/colorModel.js";
import Size from "../model/sizeModel.js";
import Product from "../model/productModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addMarquee = async (req, res) => {
    try {
        const { marquee } = req.body;

        const newMarquee = new Marquee({ string: marquee });
        await newMarquee.save();

        res.status(201).json({ message: 'Marquee added successfully', marquee: newMarquee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const setMarquee = async (req, res) => {
    try {
        const marqueeId = req.params.id;

        // Set isActive to false for all Marquee objects
        await Marquee.updateMany({}, { $set: { isActive: false } });

        // Set isActive to true for the given marqueeId
        await Marquee.findByIdAndUpdate(marqueeId, { $set: { isActive: true } });

        res.status(201).json({ message: 'Marquee updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateMarquee = async (req, res) => {
    try {
        const marquee = await Marquee.findById(req.params.id);
        const { updateString: string } = req.body

        if (!marquee) {
            return res.status(404).json({ error: 'Marquee not found' });
        }

        marquee.string = string || marquee.string

        await marquee.save();

        res.status(201).json({ message: 'Marquee updated successfully', marquee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteMarquee = async (req, res) => {
    try {
        const marquee = await Marquee.findById(req.params.id);

        if (!marquee) {
            return res.status(404).json({ error: 'Marquee not found' });
        }

        // Remove the marquee from the database
        await Marquee.findByIdAndDelete(req.params.id)

        res.status(200).json({ message: 'Marquee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate required fields
        if (!name) {
            return res.status(400).json({ message: 'Category name is required' });
        }

        // Check if category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'Category image is required' });
        }

        const image = `/category/${req.file.filename}`; // Relative path to the image

        // Create new category
        const newCategory = new Category({
            name,
            description,
            image,
        });

        // Save to the database
        const savedCategory = await newCategory.save();

        res.status(201).json({
            message: 'Category created successfully',
            category: savedCategory,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { name, description } = req.body;

        // Check if category already exists
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ message: 'Category already exists' });
        }

        // Find the category by ID
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Update fields
        if (name) category.name = name;
        if (description) category.description = description;

        // Update image if provided
        if (req.file) {
            category.image = `/category/${req.file.filename}`;
        }

        const updatedCategory = await category.save();

        res.status(200).json({
            message: 'Category updated successfully',
            category: updatedCategory,
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);

        // Find and delete the category
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Delete the associated image file
        const imagePath = path.join(__dirname, `../public${category.image}`);
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error('Error deleting image file:', err);
            }
        });
        console.log(imagePath);


        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Add a new color
export const addColor = async (req, res) => {
    try {
        const { name, hexCode } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Color name is required.' });
        }

        const color = new Color({ name, hexCode });
        await color.save();

        res.status(201).json({ message: 'Color added successfully.', color });
    } catch (error) {
        res.status(500).json({ message: 'Error adding color.', error: error.message });
    }
};

// Add a new size
export const addSize = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Size name is required.' });
        }

        const size = new Size({ name, description });
        await size.save();

        res.status(201).json({ message: 'Size added successfully.', size });
    } catch (error) {
        res.status(500).json({ message: 'Error adding size.', error: error.message });
    }
};

// POST /products
// {
//     "name": "T-Shirt",
//     "description": "Comfortable cotton t-shirt",
//     "category": "64a1b2c3d4e5f6g7h8i9j0k1", // Example category ID
//     "variants": [
//         {
//             "color": "64a1b2c3d4e5f6g7h8i9j0k2", // Example color ID
//             "size": "64a1b2c3d4e5f6g7h8i9j0k3", // Example size ID
//             "price": 20,
//             "stock": 100,
//             "images": ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
//         }
//     ]
// }

// Add a new product
export const addProduct = async (req, res) => {
    try {
        const { name, description, category, variants } = req.body;

        if (!name || !description || !category || !variants || variants.length === 0) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const product = new Product({
            name,
            description,
            category,
            variants
        });

        await product.save();

        res.status(201).json({ message: 'Product added successfully.', product });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product.', error: error.message });
    }
};

// Delete a color by ID and remove associated product variants
export const deleteColor = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the color
        const color = await Color.findByIdAndDelete(id);

        if (!color) {
            return res.status(404).json({ message: 'Color not found.' });
        }

        // Find products with variants containing the deleted color and remove those variants
        await Product.updateMany(
            { "variants.color": id },
            { $pull: { variants: { color: id } } }
        );

        res.status(200).json({ message: 'Color and associated product variants deleted successfully.', color });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting color.', error: error.message });
    }
};

// Delete a size by ID and remove associated product variants
export const deleteSize = async (req, res) => {
    try {
        const { id } = req.params;

        // Find and delete the size
        const size = await Size.findByIdAndDelete(id);

        if (!size) {
            return res.status(404).json({ message: 'Size not found.' });
        }

        // Find products with variants containing the deleted size and remove those variants
        await Product.updateMany(
            { "variants.size": id },
            { $pull: { variants: { size: id } } }
        );

        res.status(200).json({ message: 'Size and associated product variants deleted successfully.', size });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting size.', error: error.message });
    }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.status(200).json({ message: 'Product deleted successfully.', product });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product.', error: error.message });
    }
};