const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Load User model
const User = require('../models/User');

router.post('/register', usersController.register);

module.exports = router;
