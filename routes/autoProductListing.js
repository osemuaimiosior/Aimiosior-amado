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

router.get('/product-details-2016-Range-RoverEvoque(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2016-Range-RoverEvoque.html'));
});

router.get('/product-details-2016-ToyotaCorola(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2016-ToyotaCorola.html'));
});

router.get('/product-details-2018-Chevrolet-Camaro(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2018-Chevrolet-Camaro.html'));
});

router.get('/product-details-2018-GMC-Yukon(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2018-GMC-Yukon.html'));
});

router.get('/product-details-2018-HyundaiTucson(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2018-HyundaiTucson.html'));
});

router.get('/product-details-2018-lexusES350(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2018-lexusES350.html'));
});

router.get('/product-details-2020-FordRanger(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2020-FordRanger.html'));
});

router.get('/product-details-2021-BMW-X6-M50i(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2021-BMW-X6-M50i.html'));
});

router.get('/product-details-2022-Honda-Sedan(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2022-Honda-Sedan.html'));
});

router.get('/product-details-2022-Lexus-LC500(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2022-Lexus-LC500.html'));
});

router.get('/product-details-2015-BenzVerify(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','product-listing','product-details-2015-BenzVerify.html'));
});

module.exports = router;