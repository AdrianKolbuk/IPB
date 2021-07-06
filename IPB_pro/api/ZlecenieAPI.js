const ZlecenieRepository = require('../repository/sequelize/ZlecenieRepository');

exports.getZlecenia = (req, res, next) => {
    ZlecenieRepository.getZlecenia()
        .then(zlecenia => {
            res.status(200).json(zlecenia);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getZlecenieById = (req, res, next) => {
    const zlecenieId = req.params.zlecenieId;
    ZlecenieRepository.getZlecenieById(zlecenieId)
        .then(zlecenie => {
            if (!zlecenie) {
                res.status(404).json({
                    message: 'Zlecenie with id: ' + zlecenieId + ' not found'
                })
            } else {
                res.status(200).json(zlecenie);
            }
        });
};

exports.createZlecenie = (req, res, next) => {
    ZlecenieRepository.createZlecenie(req.body)
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

exports.updateZlecenie = (req, res, next) => {
    const zlecenieId = req.params.zlecenieId;
    ZlecenieRepository.updateZlecenie(zlecenieId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Zlecenie updated!', zlecenie: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteZlecenie = (req, res, next) => {
    const zlecenieId = req.params.zlecenieId;
    ZlecenieRepository.deleteZlecenie(zlecenieId)
        .then(result => {
            res.status(200).json({ message: 'Removed zlecenie', zlecenie: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};