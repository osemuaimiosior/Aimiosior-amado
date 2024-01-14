const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { logger } = require('./middleware/logEvents');
const carApi = require('./public/js/carApi.js');
const PORT = process.env.PORT || 3500;

// <----Server settings starts here---->

// custom midddleware logger
app.use(logger);

// Cross Origin Resource Sharing (cors)
const whitelist = ['https://www.yoursite.com','http://127.0.0.1:5500','http://localhost:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by cors'))
        }
    }, 
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// To handle form data
app.use(express.urlencoded({ extended: false}));

// built-in middleware to read json file into the server json
app.use(express.json());

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// <----product listing router starts here---->

app.use('/product-listing', require('./routes/autoProductListing'));
app.use('/product-listing/telComm', require('./routes/telCommProductListing'));
app.use('/product-listing/realEstate', require('./routes/realEstateProductListing'));

// <----product listing router ends here---->

// function one
/*const actionOne = (req, res) => {

    next();
};

// function two
const actionTwo = (req, res) => {
   
    next();
};

// If link is pressed, run function actionOne and actionTwo
app.get('/Dashboard/dashBoardIndex(.html)?', [actionOne, actionTwo]);*/


// <----home page routes starts here---->

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Dashboard/dashBoardIndex.html(.html)?', (req, res) => {
     res.sendFile(path.join(__dirname, 'Dashboard','dashBoardIndex.html'));
});

app.get('../index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','index.html'));
});

app.get('/teleComm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'teleComm.html'));
});

app.get('/mintAsset(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'mintAsset.html'));
});

app.get('/shop(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/realEstateHome(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'realEstateHome.html'));
});

app.get('/AboutUs(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'AboutUs.html'));
});

app.get('/login(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// <----home page routes ends here---->

// <----Server port information starts here---->

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// <----Server port information ends here---->

