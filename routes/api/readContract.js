const express = require('express');
const router = express.Router();
const readContractController = require('../../controllers/readContractController');


router.route('/getItemOwner')
    .get(readContractController.getItemOwner);

router.route('/itemHistoricOwnership/:id')
    .get(readContractController.itemHistoricOwnership);

router.route('/itemHistoricOwnershipCount/:id')
    .get(readContractController.itemOwnershipHistoryCount);

module.exports = router;