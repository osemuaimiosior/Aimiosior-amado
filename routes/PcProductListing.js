const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-HPEliteBook840G5(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-HPEliteBook840G5.html'));
});

module.exports = router;