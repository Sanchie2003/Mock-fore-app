const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const paymentsRouter = require('./payments');
app.use('/api/payments', paymentsRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
