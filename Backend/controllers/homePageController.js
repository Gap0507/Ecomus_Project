import Banner from "../model/bannerModel.js";
import Category from "../model/categoriesModel.js";
import Marquee from "../model/marqueeModel.js";
import Product from "../model/productModel.js";

export const getBanners = async (req, res) => {
    try {
        const banners = await Banner.find({});
        res.status(200).json({ banners });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getMarquee = async (req, res) => {
    try {
        const marquee = await Marquee.find({});
        res.status(200).json({ marquee });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json({ categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllProducts = async (req, res) => {
    try {
        // Query parameters for pagination, sorting, and filtering
        const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc', category, minPrice, maxPrice } = req.query;

        // Build a filter object
        const filter = {};
        if (category) {
            filter.category = category;
        }
        if (minPrice) {
            filter.price = { ...filter.price, $gte: parseFloat(minPrice) };
        }
        if (maxPrice) {
            filter.price = { ...filter.price, $lte: parseFloat(maxPrice) };
        }

        // Fetch products with pagination and sorting
        const products = await Product.find(filter)
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .populate('category'); // Populate category if needed

        // Get the total count of products for the filter
        const totalProducts = await Product.countDocuments(filter);

        res.status(200).json({
            success: true,
            totalProducts,
            currentPage: parseInt(page),
            totalPages: Math.ceil(totalProducts / limit),
            products,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch products',
            error: error.message,
        });
    }
};