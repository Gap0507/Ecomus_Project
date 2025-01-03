import express from 'express';
import userModel from '../model/userModel.js';
import Banner from '../model/bannerModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import path from 'path';
import fs from 'fs';
import {
  addMarquee,
  setMarquee,
  updateMarquee,
  deleteMarquee,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/adminController.js';
import upload from '../config/multerConfig.js';

const router = express.Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email, password })

  if (!user) {
    return res.status(400).json({ message: "Email Or Password is incorrect" })
  }


  const token = jwt.sign({
    userId: user._id,
    email: user.email,
    fullName: user.fullname
  }, "jwt-secret", { expiresIn: "1h" })

  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // Use Secure flag in production
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  res.status(200).json({ message: "Login successful", token });

})


// Add a new banner
router.post('/add-banner', upload.single('image'), async (req, res) => {
  try {
    const { heading, text } = req.body;
    const image = `/banner/${req.file.filename}`; // Relative path to the image

    const newBanner = new Banner({ heading, text, image });
    await newBanner.save();

    res.status(201).json({ message: 'Banner added successfully', banner: newBanner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a banner
router.put('/update-banner/:id', upload.single('image'), async (req, res) => {
  try {
    const { heading, text } = req.body;
    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    banner.heading = heading || banner.heading;
    banner.text = text || banner.text;

    if (req.file) {
      banner.image = `/banner/${req.file.filename}`;
    }

    await banner.save();
    res.status(200).json({ message: 'Banner updated successfully', banner });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/delete-banner/:id', async (req, res) => {
  try {
    const banner = await Banner.findById(req.params.id);
    if (!banner) {
      return res.status(404).json({ error: 'Banner not found' });
    }

    // Delete the associated image file
    const imagePath = path.join(__dirname, `../public${banner.image}`);
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error('Error deleting image file:', err);
      }
    });

    // Remove the banner from the database
    await Banner.findByIdAndDelete(req.params.id)

    res.status(200).json({ message: 'Banner deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/create-marquee', addMarquee);
router.post('/set-marquee/:id', setMarquee);
router.put('/update-marquee/:id', updateMarquee);
router.delete('/delete-marquee/:id', deleteMarquee);

router.post('/create-category', upload.single('image'), createCategory)
router.put('/update-category/:id', upload.single('image'), updateCategory)
router.delete('/delete-category/:id', deleteCategory)

export default router