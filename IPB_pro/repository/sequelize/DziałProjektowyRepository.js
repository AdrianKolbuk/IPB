const DziałProjektowy = require("../../model/sequelize/DziałProjektowy");
const Dokumentacja = require("../../model/sequelize/Dokumentacja");
const Projektant = require("../../model/sequelize/Projektant");

exports.getDziałyProjektowe = () => {
    return DziałProjektowy.findAll();
};

exports.getDziałProjektowyById = (działProjektowyId) => {
    return DziałProjektowy.findByPk(działProjektowyId,
        {
            include: [{
                model: Dokumentacja,
                as: 'dokumentacja',
                include: [{
                    model: Projektant,
                    as: 'projektant'
                }]
            }]
        });
};

exports.createDziałProjektowy = (newDziałProjektowyData) => {
    return DziałProjektowy.create({
        email: newDziałProjektowyData.email
    });
};

exports.updateDziałProjektowy = (działProjektowyId, działProjektowyData) => {
    const email = działProjektowyData.email;
    return DziałProjektowy.update(działProjektowyData, { where: { _id: działProjektowyId } });
};

exports.deleteDziałProjektowy = (działProjektowyId) => {
    return DziałProjektowy.destroy({
        where: { _id: działProjektowyId }
    });

};