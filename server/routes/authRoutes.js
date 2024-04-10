const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticateToken = require('../config/middleware');
const router = express.Router();
const secretKey = process.env.JWT_SECRET;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/register', async (req, res) => {
  const { fullName, contact, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    } 

    const user = new User({ fullName, contact, email, password });
    await user.save();
    
    res.status(201).json({ message: 'Registration successful', user });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error registering new user' });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
      return res.status(401).json( { message: 'Sorry, your password is incorrect' } );
    }

    const token = jwt.sign({ userId: user._id}, secretKey, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    return res.status(201).json({ message: "Authentication was successful", token });

  } catch (error) {
    console.log(error);
  }
});

router.get('/logout', authenticateToken, (req, res) => {
  // const userId = req.user.userId;
  res.json({ message: 'Logged out successfully' });
});

module.exports = router;