const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/auth');
const User = require('../models/user');

router.get('/users/details', verifyToken, async (req, res)=> {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ role: user.role });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
