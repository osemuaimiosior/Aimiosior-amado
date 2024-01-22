const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-2015-Benz(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2015-Benz.html'));
});

module.exports = router;