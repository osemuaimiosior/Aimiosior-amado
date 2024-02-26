const express = require('express');
const router = express.Router();


router.route('/')
    .get()
    .post((req, res) => {
        req.body
    })
    .put((req, res) => {
        req.body
    })
    .delete((req, res) => {

    });
router.route('/')
module.exports = router;