const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Zlecenie = sequelize.define('Zlecenie', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    treść: {
        type: Sequelize.STRING,
        allowNull: false
    },
    działProjektowy_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

module.exports = Zlecenie;