const express = require('express');
const router = express.Router();
const newItemController = require('../../controllers/verifyOwnerController');


router.route('/verifyItem')
    .get(newItemController.verifyItem);

module.exports = router;