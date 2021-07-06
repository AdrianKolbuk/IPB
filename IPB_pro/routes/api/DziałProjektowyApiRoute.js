const express = require('express');
const router = express.Router();

const działProjektowyApiController = require('../../api/DziałProjektowyAPI');

router.get('/', działProjektowyApiController.getDziałyProjektowe);
router.get('/:działProjektowyId', działProjektowyApiController.getDziałProjektowyById);
router.post('/', działProjektowyApiController.createDziałProjektowy);
router.put('/:działProjektowyId', działProjektowyApiController.updateDziałProjektowy);
router.delete('/:działProjektowyId', działProjektowyApiController.deleteDziałProjektowy);

module.exports = router;