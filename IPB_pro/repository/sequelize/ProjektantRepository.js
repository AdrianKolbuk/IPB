const DziałProjektowy = require("../../model/sequelize/DziałProjektowy");
const Dokumentacja = require("../../model/sequelize/Dokumentacja");
const Projektant = require("../../model/sequelize/Projektant");

exports.getProjektanci = () => {
    return Projektant.findAll();
};

exports.getProjektantById = (projektantId) => {
    return Projektant.findByPk(projektantId,
        {
            include: [{
                model: Dokumentacja,
                as: 'dokumentacja',
                include: [{
                    model: DziałProjektowy,
                    as: 'działProjektowy'
                }]
            }]
        });
};

exports.createProjektant = (newProjektantData) => {
    return Projektant.create({
        imię: newProjektantData.imię,
        nazwisko: newProjektantData.nazwisko,
        email: newProjektantData.email
    });
};

exports.updateProjektant = (projektantId, projektantData) => {
    const imię = projektantData.imię;
    const nazwisko = projektantData.nazwisko;
    const email = projektantData.email;
    return Projektant.update(projektantData, { where: { _id: projektantId } });
};

exports.deleteProjektant = (projektantId) => {
    return Projektant.destroy({
        where: { _id: projektantId }
    });

};