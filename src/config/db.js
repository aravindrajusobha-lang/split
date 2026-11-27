const mongoose = require('mongoose');
const config = require('./index');
const logger = require('../utils/logger');

const connectWithRetry = async () => {
  try {
    await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('MongoDB connection error, retrying in 5s', err);
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

module.exports = mongoose;

