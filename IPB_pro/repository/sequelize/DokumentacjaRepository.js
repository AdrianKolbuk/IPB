const Sequelize = require('sequelize');

const DziałProjektowy = require("../../model/sequelize/DziałProjektowy");
const Dokumentacja = require("../../model/sequelize/Dokumentacja");
const Projektant = require("../../model/sequelize/Projektant");

exports.getDokumentacje = () => {
    return Dokumentacja.findAll({
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            },
            {
                model: Projektant,
                as: 'projektant'
            }]
    });
};


exports.getDokumentacjaById = (dokumentacjaId) => {
    return Dokumentacja.findByPk(dokumentacjaId, {
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            },
            {
                model: Projektant,
                as: 'projektant'
            }
        ]
    });
};

exports.getDokumentacjeSortedByDate = () => {
    return Dokumentacja.findAll({
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            },
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

exports.getDokumentacjeByStateArchived = () => {
    return Dokumentacja.findAll({
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            },
            {
                model: Projektant,
                as: 'projektant'
            }
        ],
        where: {
            status: 'zaarchiwizowana'
        }
    });
};

exports.getDokumentacjeByStateStarted = () => {
    return Dokumentacja.findAll({
        include: [
            {
                model: DziałProjektowy,
                as: 'działProjektowy'
            },
            {
                model: Projektant,
                as: 'projektant'
            }
        ],
        where: {
            status: 'utworzona'
        }
    });
};

exports.createDokumentacja = (data) => {
    console.log(JSON.stringify(data));

    return Dokumentacja.create({
        działProjektowy_id: data.działProjektowy_id,
        projektant_id: data.projektant_id,
        dataUtworzenia: data.dataUtworzenia,
        nakład: data.nakład,
        formaNadruku: data.formaNadruku,
        rodzajMateriału: data.rodzajMateriału,
        tematPrzewodni: data.tematPrzewodni,
        status: data.stanProjektu
    });
};

exports.updateDokumentacja = (dokumentacjaId, data) => {
    return Dokumentacja.update(data, { where: { _id: dokumentacjaId } });
}

exports.deleteDokumentacja = (dokumentacjaId) => {
    return Dokumentacja.destroy({
        where: { _id: dokumentacjaId }
    });
}

exports.deleteManyDokumentacja = (dokumentacjaIds) => {
    return Dokumentacja.find({ _id: { [Sequelize.Op.in]: dokumentacjaIds } })
}