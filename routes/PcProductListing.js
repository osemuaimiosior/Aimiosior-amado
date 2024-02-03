const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/product-details-HPEliteBook840G5(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-HPEliteBook840G5.html'));
});

router.get('/product-details-hpSpectra(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-hpSpectra.html'));
});

router.get('/product-details-AppleMacbookAir(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-AppleMacbookAir.html'));
});

router.get('/product-details-LenovoAMDRYZEN(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-LenovoAMDRYZEN.html'));
});

router.get('/product-details-EliteBook840(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-EliteBook840.html'));
});

router.get('/product-details-macbookPro(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-macbookPro.html'));
});

router.get('/product-details-DELLCHROMEBOOK11(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-DELLCHROMEBOOK11.html'));
});

router.get('/product-details-HpPavilion15(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-HpPavilion15.html'));
});

router.get('/product-details-Hp14(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-Hp14.html'));
});

router.get('/product-details-DellVostro(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','PC','product-details-DellVostro.html'));
});

module.exports = router;




