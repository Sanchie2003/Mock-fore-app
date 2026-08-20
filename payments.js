const express = require('express');
const router = express.Router();
const https = require('https');

router.post('/initialize', async (req, res) => {
    const { email, amount, userId } = req.body;
    
    const params = JSON.stringify({
        email,
        amount: amount * 100,
        callback_url: "https://mock-fore-app.onrender.com"
    });

    const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-Type': 'application/json'
        }
    };

    const paystackReq = https.request(options, apiRes => {
        let data = '';
        apiRes.on('data', chunk => { data += chunk; });
        apiRes.on('end', () => {
            res.json(JSON.parse(data));
        });
    });

    paystackReq.on('error', error => {
        res.status(500).json({ error: error.message });
    });

    paystackReq.write(params);
    paystackReq.end();
});

module.exports = router;
