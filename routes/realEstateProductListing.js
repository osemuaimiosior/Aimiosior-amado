const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-usResidence(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','realEstate','product-details-usResidence.html'));
});

router.get('/product-details-usResidence1(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','realEstate','product-details-usResidence1.html'));
});

router.get('/product-details-SectionedLand(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','realEstate','product-details-SectionedLand.html'));
});

module.exports = router;
