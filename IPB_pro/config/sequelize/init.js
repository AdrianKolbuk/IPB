const sequelize = require('./sequelize');

const DziałProjektowy = require('../../model/sequelize/DziałProjektowy');
const Dokumentacja = require('../../model/sequelize/Dokumentacja');
const Projektant = require('../../model/sequelize/Projektant');
const Zlecenie = require('../../model/sequelize/Zlecenie');
const KolekcjaGrafik = require('../../model/sequelize/KolekcjaGrafik');

module.exports = () => {
    DziałProjektowy.hasMany(Dokumentacja, { as: 'dokumentacja', foreignKey: { name: 'działProjektowy_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Dokumentacja.belongsTo(DziałProjektowy, { as: 'działProjektowy', foreignKey: { name: 'działProjektowy_id', allowNull: false } });

    Projektant.hasMany(Dokumentacja, { as: 'dokumentacja', foreignKey: { name: 'projektant_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Dokumentacja.belongsTo(Projektant, { as: 'projektant', foreignKey: { name: 'projektant_id', allowNull: false } });

    DziałProjektowy.hasMany(Zlecenie, { as: 'zlecenie', foreignKey: { name: 'działProjektowy_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    Zlecenie.belongsTo(DziałProjektowy, { as: 'działProjektowy', foreignKey: { name: 'działProjektowy_id', allowNull: false } });

    Projektant.hasMany(KolekcjaGrafik, { as: 'kolekcjaGrafik', foreignKey: { name: 'projektant_id', allowNull: false }, constraints: true, onDelete: 'CASCADE' });
    KolekcjaGrafik.belongsTo(Projektant, { as: 'projektant', foreignKey: { name: 'projektant_id', allowNull: false } });


    let allDziałProjektowy, allProjektant;
    return sequelize
        .sync({ force: true })
        .then(() => {
            return DziałProjektowy.findAll();
        })
        .then(działProjektowy => {
            if (!działProjektowy || działProjektowy.length == 0) {
                return DziałProjektowy.bulkCreate([
                    { email: 'firma@gmail.com' }
                ])
                    .then(() => {
                        return DziałProjektowy.findAll();
                    });
            } else {
                return działProjektowy;
            }
        })
        .then(działProjektowy => {
            allDziałProjektowy = działProjektowy;
            return Projektant.findAll();
        })
        .then(projektant => {
            if (!projektant || projektant.length == 0) {
                return Projektant.bulkCreate([
                    { imię: 'Jan', nazwisko: 'Kowalski', email: 'projektant@gmail.com' }
                ])
                    .then(() => {
                        return DziałProjektowy.findAll();
                    });
            } else {
                return projektant;
            }
        })
        .then(projektant => {
            allProjektant = projektant;
            return Dokumentacja.findAll();
        })
        .then(dokumentacja => {
            if (!dokumentacja || dokumentacja.length == 0) {
                return Dokumentacja.bulkCreate([
                    { działProjektowy_id: allDziałProjektowy[0]._id, projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-06', nakład: 500, formaNadruku: 'sitodruk', rodzajMateriału: 'Wełna, gramatura 100g/m', tematPrzewodni: 'lata 80', status: 'zaarchiwizowana' },
                    { działProjektowy_id: allDziałProjektowy[0]._id, projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-07', nakład: 1000, formaNadruku: 'haft', rodzajMateriału: 'Wełna, gramatura 100g/m', tematPrzewodni: 'Punkowy klimat', status: 'zaarchiwizowana' },
                    { działProjektowy_id: allDziałProjektowy[0]._id, projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-03', nakład: 800, formaNadruku: 'druk cyfrowy', rodzajMateriału: 'Wełna, gramatura 100g/m', tematPrzewodni: 'lata 90', status: 'zaarchiwizowana' },
                    { działProjektowy_id: allDziałProjektowy[0]._id, projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-22', nakład: 2000, formaNadruku: 'haft', rodzajMateriału: 'Wełna, gramatura 100g/m', tematPrzewodni: 'Gangstas', status: 'utworzona' }
                ]);
            } else {
                return dokumentacja;
            }
        })
        .then(projektant => {
            allProjektant = projektant;
            return KolekcjaGrafik.findAll();
        })
        .then(kolekcjaGrafik => {
            if (!kolekcjaGrafik || kolekcjaGrafik.length == 0) {
                return KolekcjaGrafik.bulkCreate([
                    { projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-06', odnośnik: 'http://oneDrive/kolekcjaGrafik/1', status: 'zaakceptowana' },
                    { projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-07', odnośnik: 'http://oneDrive/kolekcjaGrafik/2', status: 'zaakceptowana' },
                    { projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-06', odnośnik: 'http://oneDrive/kolekcjaGrafik/1', status: 'zaakceptowana' },
                    { projektant_id: allProjektant[0]._id, dataUtworzenia: '2021-06-07', odnośnik: 'http://oneDrive/kolekcjaGrafik/2', status: 'wysłana' }
                ]);
            } else {
                return kolekcjaGrafik;
            }
        })
        .then(działProjektowy => {
            allDziałProjektowy = działProjektowy;
            return Zlecenie.findAll();
        })
        .then(zlecenie => {
            if (!zlecenie || zlecenie.length == 0) {
                return Zlecenie.bulkCreate([
                    { działProjektowy_id: allDziałProjektowy[0]._id, treść: 'Lorem ipsum' },
                    { działProjektowy_id: allDziałProjektowy[0]._id, treść: 'Lorem ipsum' }
                ]);
            } else {
                return zlecenie;
            }
        });
};