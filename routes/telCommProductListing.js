const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-Iphone14Pro(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm','product-details-Iphone14Pro.html'));
});

router.get('/product-details-TechnoCanno16(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm','product-details-TechnoCanno16.html'));
});

router.get('/product-details-XiaomiRedmi(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm','product-details-XiaomiRedmi.html'));
});

module.exports = router;


