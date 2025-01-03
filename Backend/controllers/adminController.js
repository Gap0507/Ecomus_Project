import Marquee from "../model/marqueeModel.js";
import Category from "../model/categoriesModel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

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