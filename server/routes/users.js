const express = require('express');
const router = express.Router();

// Load User model
const User = require('../models/User');

router.post('/register', (req, res) => {
  console.log('In register route');
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  newUser
    .save()
    .then(user => res.json(user))
    .catch(console.log);
});

module.exports = router;
