const express = require('express');
const router = express.Router();

const projektantApiController = require('../../api/ProjektantAPI');

router.get('/', projektantApiController.getProjektanci);
router.get('/:projektantId', projektantApiController.getProjektantById);
router.post('/', projektantApiController.createProjektant);
router.put('/:projektantId', projektantApiController.updateProjektant);
router.delete('/:projektantId', projektantApiController.deleteProjektant);

module.exports = router;