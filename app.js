const express = require('express');
const app = express();

const path = require('path');
const logEvents = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;

// custom midddleware logger
app.use((req, res, next) => {
    logEvents(`${req.method}\t${req.headers.orgin}\t${req.url}`);
    next();
});

// To handle form data
app.use(express.urlencoded({ extended: false}));

// built-in middleware for json
app.use(express.json());

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// function one
/*const actionOne = (req, res) => {
    res.sendFile(path.join(__dirname, 'AboutUs.html'));
    next();
};

// function two
const actionTwo = (req, res) => {
    res.sendFile(path.join(__dirname, 'AboutUs.html'));
    next();
};

// If link is pressed, run function actionOne and actionTwo
app.get('^/$|/index(.html)?', [actionOne, actionTwo]);*/




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

