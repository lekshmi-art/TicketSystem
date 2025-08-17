
// const express = require('express');
// const { registerUser, loginUser, updateUserProfile, getProfile } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');
// const router = express.Router();

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/profile', protect, getProfile);
// router.put('/profile', protect, updateUserProfile);

// module.exports = router;

const r = require('express').Router();
const { login, register } = require('../controllers/authController');
r.post('/register', register);
r.post('/login', login);
module.exports = r;


