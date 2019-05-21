const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const usersRoutes = require('./routes/users');
const favoritesRoutes = require('./routes/favorites');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

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
