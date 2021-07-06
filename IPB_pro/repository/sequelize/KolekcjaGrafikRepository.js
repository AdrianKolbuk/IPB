const Sequelize = require('sequelize');

const KolekcjaGrafik = require("../../model/sequelize/KolekcjaGrafik");
const Dokumentacja = require("../../model/sequelize/Dokumentacja");
const Projektant = require("../../model/sequelize/Projektant");

exports.getKolekcjeGrafik = () => {
    return KolekcjaGrafik.findAll({
        include: [
            {
                model: Projektant,
                as: 'projektant'
            }
        ]
    });
};

exports.getKolekcjaGrafikById = (kolekcjaGrafikId) => {
    return KolekcjaGrafik.findByPk(kolekcjaGrafikId, {
        include: [
            {
                model: Projektant,
                as: 'projektant'
            }
        ]
    });
};

exports.getKolekcjeGrafikSortedByDate = () => {
    return KolekcjaGrafik.findAll({
        include: [
            {
                model: Projektant,
                as: 'projektant'
            }
        ],
        order: [
            ['dataUtworzenia', 'DESC']
        ]
    });
};

exports.getKolekcjeGrafikByStateAccepted = () => {
    return KolekcjaGrafik.findAll({
        include: [
            {
                model: Projektant,
                as: 'projektant'
            }
        ],
        where: {
            status: 'zaakceptowana'
        }
    });
};

exports.createKolekcjaGrafik = (data) => {
    console.log(JSON.stringify(data));

    return KolekcjaGrafik.create({
        projektant_id: data.projektant_id,
        dataUtworzenia: data.dataUtworzenia,
        odnośnik: data.odnośnik,
        status: data.status
    });
};

exports.updateKolekcjaGrafik = (kolekcjaGrafikId, data) => {
    return KolekcjaGrafik.update(data, { where: { _id: kolekcjaGrafikId } });
}

exports.deleteKolekcjaGrafik = (kolekcjaGrafikId) => {
    return KolekcjaGrafik.destroy({
        where: { _id: kolekcjaGrafikId }
    });
}

exports.deleteManyKolekcjaGrafik = (kolekcjaGrafikIds) => {
    return KolekcjaGrafik.find({ _id: { [Sequelize.Op.in]: kolekcjaGrafikIds } })
}