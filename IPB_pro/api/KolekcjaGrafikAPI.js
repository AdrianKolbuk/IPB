const KolekcjaGrafikRepository = require('../repository/sequelize/KolekcjaGrafikRepository');

exports.getKolekcjeGrafik = (req, res, next) => {
    KolekcjaGrafikRepository.getKolekcjeGrafik()
        .then(kolekcjeGrafik => {
            res.status(200).json(kolekcjeGrafik);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getKolekcjeGrafikSortedByDate = (req, res, next) => {
    KolekcjaGrafikRepository.getKolekcjeGrafikSortedByDate()
        .then(kolekcjeGrafik => {
            res.status(200).json(kolekcjeGrafik);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getKolekcjeGrafikByStateAccepted = (req, res, next) => {
    KolekcjaGrafikRepository.getKolekcjeGrafikByStateAccepted()
        .then(kolekcjeGrafik => {
            res.status(200).json(kolekcjeGrafik);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getKolekcjaGrafikById = (req, res, next) => {
    const kolekcjaGrafikId = req.params.kolekcjaGrafikId;
    KolekcjaGrafikRepository.getKolekcjaGrafikById(kolekcjaGrafikId)
        .then(kolekcjaGrafik => {
            if (!kolekcjaGrafik) {
                res.status(404).json({
                    message: 'KolekcjaGrafik with id: ' + kolekcjaGrafikId + ' not found'
                })
            } else {
                res.status(200).json(kolekcjaGrafik);
            }
        });
};

exports.createKolekcjaGrafik = (req, res, next) => {
    KolekcjaGrafikRepository.createKolekcjaGrafik(req.body)
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

exports.updateKolekcjaGrafik = (req, res, next) => {
    const kolekcjaGrafikId = req.params.kolekcjaGrafikId;
    KolekcjaGrafikRepository.updateKolekcjaGrafik(kolekcjaGrafikId, req.body)
        .then(result => {
            res.status(200).json({ message: 'KolekcjaGrafik updated!', kolekcjaGrafik: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteKolekcjaGrafik = (req, res, next) => {
    const kolekcjaGrafikId = req.params.kolekcjaGrafikId;
    KolekcjaGrafikRepository.deleteKolekcjaGrafik(kolekcjaGrafikId)
        .then(result => {
            res.status(200).json({ message: 'Removed kolekcjaGrafik', kolekcjaGrafik: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};