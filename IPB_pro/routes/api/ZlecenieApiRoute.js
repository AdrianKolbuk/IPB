const express = require('express');
const router = express.Router();

const zlecenieApiController = require('../../api/ZlecenieAPI');

router.get('/', zlecenieApiController.getZlecenia);
router.get('/:zlecenieId', zlecenieApiController.getZlecenieById);
router.post('/', zlecenieApiController.createZlecenie);
router.put('/:zlecenieId', zlecenieApiController.updateZlecenie);
router.delete('/:zlecenieId', zlecenieApiController.deleteZlecenie);

module.exports = router;