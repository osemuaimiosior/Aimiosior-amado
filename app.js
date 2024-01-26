const { RapidAPIKey, RapidAPIHost } = require('./config.json');
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { logger } = require('./middleware/logEvents');
const carApi = require('./public/js/carApi');

const PORT = process.env.PORT || 3500;

// custom midddleware logger
// app.use(logger);

// Cross Origin Resource Sharing (cors)
// const whitelist = ['https://www.yoursite.com','https://www.google.com','http://127.0.0.1:5500','http://localhost:3500','http://54.91.233.27:3500'];
const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
        //if(whitelist.indexOf(origin) !== -1 || !origin){
           // callback(null, true)
       // } else {
            //callback(new Error('Not allowed by cors'))
       // }
    }, 
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// To handle form data
app.use(express.urlencoded({extended: true}));

// built-in middleware to read json file into the server json
app.use(express.json());

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// <----product listing router starts here---->

app.use('/', require('./routes/route'));
app.use('/product-listing', require('./routes/autoProductListing'));
app.use('/product-listing/PC', require('./routes/PcProductListing'));
app.use('/product-listing/telComm', require('./routes/telCommProductListing'));
app.use('/product-listing/realEstate', require('./routes/realEstateProductListing'));

// <----Car estimate forms data processing starts here---->

app.post('/data', (req, res) => {
        const vin = req.body.carVin;
        const mileage = req.body.carMileage;
        const url = `https://car-utils.p.rapidapi.com/marketvalue?vin=${vin}&mileage=${mileage}`;
        const options = {
            method: 'GET',
            headers: {'X-RapidAPI-Key': RapidAPIKey,
            'X-RapidAPI-Host': RapidAPIHost}
          };
          carApi(url, options);
          res.sendFile(path.join(__dirname, 'carEstimate.html'));
});

// <----Car estimate forms data processing ends here---->

// <----General mallware starts here---->

app.get('/Dashboard/dashBoardIndex(.html)?', (req, res) => {
     res.sendFile(path.join(__dirname, 'Dashboard','dashBoardIndex.html'));
});

app.get('../mintAsset(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'mintAsset.html'));
});

// <----home page routes ends here---->

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));