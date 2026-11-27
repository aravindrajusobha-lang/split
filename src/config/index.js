const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const required = ['PORT', 'MONGO_URI', 'JWT_SECRET'];
required.forEach(key => {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
});

module.exports = Object.freeze({
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '15m',
  refreshSecret: process.env.REFRESH_SECRET,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100,
  },
});

