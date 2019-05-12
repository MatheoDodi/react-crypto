const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String
  },
  favorites: {
    type: Array
  }
});

const Favorites = mongoose.model('favorites', FavoritesSchema);

module.exports = Favorites;
