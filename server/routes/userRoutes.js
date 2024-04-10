const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../config/middleware');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/profile', authenticateToken, async (req, res) => {
  // The authenticateToken middleware ensures that the request is authenticated
  // Retrieve the user information based on the decoded token
  const userId = req.user.userId;
  const user = await User.findById(userId);

  if (user) {
    res.json({ fullName: user.fullName, email: user.email, contact: user.contact });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

router.post('/chat/:id', async (req, res) => {
  const slug = req.params.id;

  if (!slug) {
    console.log("No slug found");
    res.status(400).send("No slug found");
  } else {
    console.log("Slug found");
    try {
      const { message } = req.body; // Assuming message is the key containing the sent message
      console.log("Received message:", message);
      
      // Here you can handle the received message as per your requirements
      // For example, you can save it to a database, process it, or send a response back to the client
      
      res.status(200).send("Message received successfully");
    } catch (error) {
      console.error("Error handling message:", error);
      res.status(500).send("Internal server error");
    }
  }
});

module.exports = router;