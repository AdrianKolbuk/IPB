const ProjektantRepository = require('../repository/sequelize/ProjektantRepository');

exports.getProjektanci = (req, res, next) => {
    ProjektantRepository.getProjektanci()
        .then(projektanci => {
            res.status(200).json(projektanci);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getProjektantById = (req, res, next) => {
    const projektantId = req.params.projektantId;
    ProjektantRepository.getProjektantById(projektantId)
        .then(projektant => {
            if (!projektant) {
                res.status(404).json({
                    message: 'Projektant with id: ' + projektantId + ' not found'
                })
            } else {
                res.status(200).json(projektant);
            }
        });
};

exports.createProjektant = (req, res, next) => {
    ProjektantRepository.createProjektant(req.body)
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

exports.updateProjektant = (req, res, next) => {
    const projektantId = req.params.projektantId;
    ProjektantRepository.updateProjektant(projektantId, req.body)
        .then(result => {
            res.status(200).json({ message: 'Projektant updated!', projektant: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteProjektant = (req, res, next) => {
    const projektantId = req.params.projektantId;
    ProjektantRepository.deleteProjektant(projektantId)
        .then(result => {
            res.status(200).json({ message: 'Removed projektant', projektant: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};