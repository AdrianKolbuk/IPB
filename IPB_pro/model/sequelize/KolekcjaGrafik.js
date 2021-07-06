const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const KolekcjaGrafik = sequelize.define('KolekcjaGrafik', {
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
    odnośnik: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    projektant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = KolekcjaGrafik;