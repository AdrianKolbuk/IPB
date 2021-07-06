const express = require('express');
const router = express.Router();

const kolekcjaGrafikApiController = require('../../api/KolekcjaGrafikAPI');

router.get('/', kolekcjaGrafikApiController.getKolekcjeGrafik);
router.get('/sorted', kolekcjaGrafikApiController.getKolekcjeGrafikSortedByDate);
router.get('/zaakceptowane', kolekcjaGrafikApiController.getKolekcjeGrafikByStateAccepted);
router.get('/:kolekcjaGrafikId', kolekcjaGrafikApiController.getKolekcjaGrafikById);
router.post('/', kolekcjaGrafikApiController.createKolekcjaGrafik);
router.put('/:kolekcjaGrafikId', kolekcjaGrafikApiController.updateKolekcjaGrafik);
router.delete('/:kolekcjaGrafikId', kolekcjaGrafikApiController.deleteKolekcjaGrafik);

module.exports = router;