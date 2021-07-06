const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Dokumentacja = sequelize.define('Dokumentacja', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    dataUtworzenia: {
        type: Sequelize.DATE,
        allowNull: false
    },
    nakład: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    formaNadruku: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rodzajMateriału: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tematPrzewodni: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    działProjektowy_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    projektant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Dokumentacja;