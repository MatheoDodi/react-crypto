const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');
const User = require('../models/User');

// Create a collection of favorites
router.post('/', (req, res) => {
  const favorites = req.body.favorites;

  User.findOne({ name: req.body.name })
    .then(user => {
      const newFavorite = new Favorite({
        favorites,
        name: req.body.name,
        user: user._id
      });
      console.log(newFavorite.user);
      newFavorite
        .save()
        .then(favorite => res.json(favorite))
        .catch(console.log);
    })
    .catch(console.log);
});

//Get a collection of favorites
router.get('/', (req, res) => {
  const name = req.body.name;

  Favorite.findOne({ name })
    .populate('user')
    .then(collection => res.json(collection))
    .catch(console.log);
});

module.exports = router;
