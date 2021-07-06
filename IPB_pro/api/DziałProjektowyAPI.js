const DziałProjektowyRepository = require('../repository/sequelize/DziałProjektowyRepository');

exports.getDziałyProjektowe = (req, res, next) => {
    DziałProjektowyRepository.getDziałyProjektowe()
        .then(działyProjektowe => {
            res.status(200).json(działyProjektowe);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getDziałProjektowyById = (req, res, next) => {
    const działProjektowyId = req.params.działProjektowyId;
    DziałProjektowyRepository.getDziałProjektowyById(działProjektowyId)
        .then(działProjektowy => {
            if (!działProjektowy) {
                res.status(404).json({
                    message: 'DziałProjektowy with id: ' + działProjektowyId + ' not found'
                })
            } else {
                res.status(200).json(działProjektowy);
            }
        });
};

exports.createDziałProjektowy = (req, res, next) => {
    DziałProjektowyRepository.createDziałProjektowy(req.body)
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

exports.updateDziałProjektowy = (req, res, next) => {
    const działProjektowyId = req.params.działProjektowyId;
    DziałProjektowyRepository.updateDziałProjektowy(działProjektowyId, req.body)
        .then(result => {
            res.status(200).json({ message: 'DziałProjektowy updated!', działProjektowy: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteDziałProjektowy = (req, res, next) => {
    const działProjektowyId = req.params.działProjektowyId;
    DziałProjektowyRepository.deleteDziałProjektowy(działProjektowyId)
        .then(result => {
            res.status(200).json({ message: 'Removed działProjektowy', działProjektowy: result });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};