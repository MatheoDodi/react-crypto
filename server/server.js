const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const usersRoutes = require('./routes/users');
const favoritesRoutes = require('./routes/favorites');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to db!'))
  .catch(err => console.log(err));

app.use('/api/user', usersRoutes);
app.use('/api/favorites', favoritesRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is listening on port ${port}`));
