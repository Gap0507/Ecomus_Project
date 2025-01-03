import express from 'express';
import { getBanners, getMarquee, getCategories } from '../controllers/homePageController.js';

const router = express.Router()

// Get all banners
router.get('/banners', getBanners);
router.get('/marquee', getMarquee);
router.get('/categories', getCategories);
router.get('/products', getCategories);

export default router