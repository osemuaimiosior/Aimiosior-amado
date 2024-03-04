const express = require('express');
const router = express.Router();
const mintItemController = require('../../controllers/mintItemController');


router.route('/mintItem')
    .get(mintItemController.mintNewItem);

router.route('/getAllItems')
    .post(mintItemController.getAllItemsByAddress);

module.exports = router;