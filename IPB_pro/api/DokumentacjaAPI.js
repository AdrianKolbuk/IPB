const DokumentacjaRepository = require('../repository/sequelize/DokumentacjaRepository');

exports.getDokumentacje = (req, res, next) => {
    DokumentacjaRepository.getDokumentacje()
        .then(dokumentacje => {
            res.status(200).json(dokumentacje);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDokumentacjeByStateArchived = (req, res, next) => {
    DokumentacjaRepository.getDokumentacjeByStateArchived()
        .then(dokumentacje => {
            res.status(200).json(dokumentacje);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDokumentacjeByStateStarted = (req, res, next) => {
    DokumentacjaRepository.getDokumentacjeByStateStarted()
        .then(dokumentacje => {
            res.status(200).json(dokumentacje);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDokumentacjeSortedByDate = (req, res, next) => {
    DokumentacjaRepository.getDokumentacjeSortedByDate()
        .then(dokumentacje => {
            res.status(200).json(dokumentacje);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDokumentacjaById = (req, res, next) => {
    const dokumentacjaId = req.params.dokumentacjaId;
    DokumentacjaRepository.getDokumentacjaById(dokumentacjaId)
        .then(dokumentacja => {
            if (!dokumentacja) {
                res.status(404).json({
                    message: 'Dokumentacja with id: ' + dokumentacjaId + ' not found'
                })
            } else {
                res.status(200).json(dokumentacja);
            }
        });
};

exports.createDokumentacja = (req, res, next) => {
    DokumentacjaRepository.createDokumentacja(req.body)
        .then(newObj => {
            res.status(201).json(newObj);
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.updateDokumentacja = (req, res, next) => {
    const dokumentacjaId = req.params.dokumentacjaId;
    DokumentacjaRepository.updateDokumentacja(dokumentacjaId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Dokumentacja updated!', dokumentacja: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteDokumentacja = (req, res, next) => {
    const dokumentacjaId = req.params.dokumentacjaId;
    DokumentacjaRepository.deleteDokumentacja(dokumentacjaId)
        .then(result => {
            res.status(200).json({ message: 'Removed dokumentacja', dokumentacja: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};