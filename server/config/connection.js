// code from 21-25
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/game-recipes-db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;