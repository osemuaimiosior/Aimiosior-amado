const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','index.html'));
});

router.get('/profilePage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','profilePage.html'));
});

router.get('/inner-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','inner-page.html'));
});

router.get('/aboutPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','aboutPage.html'));
});

router.get('/teamPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','teamPage.html'));
});

router.get('/faqPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','faqPage.html'));
});

router.get('/contactPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','contactPage.html'));
});

router.get('/indexTrade(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','index.html'));
});

router.get('/teleComm(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','teleComm.html'));
});

router.get('/autoMobile(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','autoMobilePage.html'));
});

router.get('/PC(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','PC.html'));
});

router.get('/shop(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','shop.html'));
});

router.get('/realEstateHome(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','realEstateHome.html'));
});

router.get('/AboutUs(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','AboutUs.html'));
});

// About US section (Home page) starts here.--->
router.get('/AboutUs(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','AboutUs.html'));
});
// About US section (Home page) ends here.--->

// About US section (Home page) starts here.--->
router.get('/mintTransfer(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','mintTransfer.html'));
});

router.get('/reportPage(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','reportPage.html'));
});

router.get('/trackVerify(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','trackVerify.html'));
});

router.get('/trade(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','trade.html'));
});

// About US section (Home page) ends here.--->

/*router.get('/carEstimate(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','carEstimate.html'));
});*/

router.get('/login(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','login.html'));
});

router.get('/verificationResult(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','verificationResult.html'));
});

router.get('/portfolio-details(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','Maxim','portfolio-details.html'));
});

module.exports = router;
