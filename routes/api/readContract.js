const express = require('express');
const router = express.Router();
const readContractController = require('../../controllers/readContractController');


router.route('/getItemOwner/:id')
    .get(readContractController.getItemOwner);

router.route('/itemHistoricOwnership/:id')
    .get(readContractController.itemHistoricOwnership);

module.exports = router;