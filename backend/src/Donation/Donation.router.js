const express = require('express');
const multer = require('multer');
const path = require('path');
const Donation = require('../Donation.model');

const router = express.Router();

// Set up storage for images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    },
});

const upload = multer({ storage: storage });

// POST route for donations
router.post('/', upload.single('image'), async (req, res) => {
    const { name, number, address, email } = req.body;
    const image = req.file.path;

    const newDonation = new Donation({
        name,
        number,
        address,
        email,
        image,
    });

    try {
        await newDonation.save();
        res.status(201).json({ message: 'Donation created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;