const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const DziałProjektowy = sequelize.define('DziałProjektowy', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = DziałProjektowy;