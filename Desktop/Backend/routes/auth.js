
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { userName, password } = req.body;

  try {
    let user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ userName, password });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude passwords from the response for security
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

  

module.exports = router;
