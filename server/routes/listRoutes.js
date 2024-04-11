const express = require('express');
const multer  = require('multer');
const fs = require('fs');
const authenticateToken = require('../config/middleware');
const List = require('../models/List');
const { cloudinary } = require('../config/middleware/cloudinary');
const router = express.Router();

// Set up multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

// Create a listing
router.post('/create', authenticateToken, upload.array('images', 4), async (req, res) => {
  const { propertyName, address, price, bedrooms, bathrooms, lenght, width, propertyType, status } = req.body;
  const userId = req.user.userId;

  try {
    // Fetch all existing listings from the database
    const existingListings = await List.find({});
    // Extract the property IDs from the existing listings
    const existingIds = existingListings.map(listing => listing.propertyID);

    const generateNextPropertyId = (existingIds) => {
      if (!existingIds || existingIds.length === 0) {
        return 'ELH-001';
      }

      const highestId = existingIds.reduce((maxId, currentId) => {
        const currentIdNum = extractNumericPartFromId(currentId);
        const maxIdNum = extractNumericPartFromId(maxId);
        return currentIdNum > maxIdNum ? currentId : maxId;
      }, '');

      const highestIdNum = extractNumericPartFromId(highestId);
      const nextIdNum = highestIdNum + 1;
      const nextId = `ELH-${nextIdNum.toString().padStart(3, '0')}`;
      return nextId;
    };

    const extractNumericPartFromId = (id) => {
      if (!id || typeof id !== 'string') {
        return 0;
      }

      const numericPart = id.replace('ELH-', '');
      return parseInt(numericPart, 10) || 0;
    };
    const propertyId = generateNextPropertyId(existingIds);

    // Array to store cloudinary image URLs
    const imageUrls = [];
    const uploadOptions = {
      folder: 'listings', // Specify your desired folder name here
      use_filename: true
    };

    // Upload images to Cloudinary and get URLs
    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.buffer.toString('base64'), uploadOptions);
      imageUrls.push(result.secure_url);
    }
    
    // Create a new listing object with form data and image URLs
    const list = new List({
      propertyName, propertyID: propertyId, tags: JSON.parse(req.body.tags), price,
      address, bedrooms, bathrooms, lenght, width, propertyType, 
      status, features: JSON.parse(req.body.features), images: imageUrls // Cloudinary image URLs
    });

    // Save the listing to the database
    await list.save();

    // Delete uploaded images from the uploads directory
    req.files.forEach(file => {
      fs.unlinkSync(file.path);
    });

    res.status(201).json({ message: 'Listing created successfully', userId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating listing' });
  }
});

// Fetch all lists
router.get('/', async (req, res) => {
  const limit = parseInt(req.query.limit) || 10; // Default limit
  const skip = parseInt(req.query.skip) || 0; // Default skip

  try {
    // Your logic to fetch listings from database
    const lists = await List.find().limit(limit).skip(skip);
    const totalListings = await List.countDocuments(); // Get total listings count

    res.json({ lists, total: totalListings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching listings' });
  }
})

// Fetch a particular list
router.get('/list/:id', async (req, res) => {
  try {
    let slug = req.params.id;

    if (!slug) {
      return res.status(409).json({ message: "No record of this listing was found..." });
    }

    const data = await List.findById(slug);

    return res.status(201).json({ message: `Loaded ${data.propertyName}'s details`, data });
  } catch (error) {
    console.log(error);
  }
});



router.post('/upload', async (req, res) => {
  try {
    const uploadPromises = images.map(async (imagePath) => {
      const uploadOptions = {
        folder: 'listings' // Specify your desired folder name here
      };
      return await cloudinary.uploader.upload(imagePath, uploadOptions);
    });

    const uploadResults = await Promise.all(uploadPromises); // Wait for all uploads to complete
    res.json({ message: 'Images uploaded successfully!', data: uploadResults }); // Send a success response

  } catch (err) {
    console.error('Something went wrong:', err);
    res.status(500).json({ message: 'Error uploading images' }); // Send an error response
  }
});


module.exports = router;