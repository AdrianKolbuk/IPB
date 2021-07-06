const express = require('express');
const router = express.Router();

const dokumentacjaApiController = require('../../api/DokumentacjaAPI');

router.get('/', dokumentacjaApiController.getDokumentacje);
router.get('/sorted', dokumentacjaApiController.getDokumentacjeSortedByDate);
router.get('/zaarchiwizowane', dokumentacjaApiController.getDokumentacjeByStateArchived);
router.get('/utworzone', dokumentacjaApiController.getDokumentacjeByStateStarted);
router.get('/:dokumentacjaId', dokumentacjaApiController.getDokumentacjaById);
router.post('/', dokumentacjaApiController.createDokumentacja);
router.put('/:dokumentacjaId', dokumentacjaApiController.updateDokumentacja);
router.delete('/:dokumentacjaId', dokumentacjaApiController.deleteDokumentacja);

module.exports = router;