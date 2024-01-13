const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-2015-Benz(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2015-Benz.html'));
});

router.get('/product-details-2016-TeslaModelS(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2016-TeslaModelS.html'));
});

module.exports = router;