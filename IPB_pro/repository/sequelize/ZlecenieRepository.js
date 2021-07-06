const Sequelize = require('sequelize');

const Zlecenie = require("../../model/sequelize/Zlecenie");
const Dokumentacja = require("../../model/sequelize/Dokumentacja");
const DziałProjektowy = require("../../model/sequelize/DziałProjektowy");

exports.getZlecenia = () => {
    return Zlecenie.findAll({
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            }
        ]
    });
};

exports.getZlecenieById = (zlecenieId) => {
    return Zlecenie.findByPk(zlecenieId, {
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            }
        ]
    });
};

exports.createZlecenie = (data) => {
    console.log(JSON.stringify(data));

    return Zlecenie.create({
        działProjektowy_id: data.działProjektowy_id,
        treść: data.treść
    });
};

exports.updateZlecenie = (zlecenieId, data) => {
    return Zlecenie.update(data, { where: { _id: zlecenieId } });
}

exports.deleteZlecenie = (zlecenieId) => {
    return Zlecenie.destroy({
        where: { _id: zlecenieId }
    });
}

exports.deleteManyZlecenie = (zlecenieIds) => {
    return Zlecenie.find({ _id: { [Sequelize.Op.in]: zlecenieIds } })
}