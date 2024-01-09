const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('../index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','index.html'));
});

app.get('/teleComm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'teleComm.html'));
});

app.get('/realEstateHome(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'realEstateHome.html'));
});

app.get('/AboutUs(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'AboutUs.html'));
});

app.get('/Dashboard/dashBoardIndex(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dashboard', 'dashBoardIndex.html'));
});

app.get('/product-listing/product-details-2015-Benz(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'product-listing','product-details-2015-Benz.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

