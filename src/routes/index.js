const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    success: true,
    data: { uptime: process.uptime() },
    message: 'OK',
    errors: null,
  });
});

module.exports = router;

