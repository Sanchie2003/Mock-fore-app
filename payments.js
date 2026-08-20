const express = require('express');
const router = express.Router();

router.post('/create-payment-intent', async (req, res) => {
    res.json({ clientSecret: 'mock_secret_123' });
});

module.exports = router;
