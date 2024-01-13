const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-2015-Benz(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2015-Benz.html'));
});

router.get('/product-details-2016-TeslaModelS(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2016-TeslaModelS.html'));
});

router.get('/product-details-2015-BMW335(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2015-BMW335.html'));
});

router.get('/product-details-2015-Toyota-Rav4(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2015-Toyota-Rav4.html'));
});

router.get('/product-details-2016-NissanMurano-Hybrid(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2016-NissanMurano-Hybrid.html'));
});

module.exports = router;