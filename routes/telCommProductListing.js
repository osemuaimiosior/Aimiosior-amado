const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-Iphone14ProMax(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm','product-details-Iphone14ProMax.html'));
});

router.get('/product-details-XiaomiRedmi(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm','product-details-XiaomiRedmi.html'));
});

router.get('/product-details-Iphone13(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-Iphone13.html'));
});

router.get('/product-details-TechnoCanno20(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-TechnoCanno20.html'));
});

router.get('/product-details-samsungUltra5G(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-samsungUltra5G.html'));
});

router.get('/product-details-galaxyS20(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-galaxyS20.html'));
});

router.get('/product-details-infinixSmart7(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-infinixSmart7.html'));
});

router.get('/product-details-galaxyA14(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-galaxyA14.html'));
});

router.get('/product-details-itel2163(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','telComm', 'product-details-itel2163.html'));
});



module.exports = router;





