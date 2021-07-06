const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Projektant = sequelize.define('Projektant', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    imię: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nazwisko: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Projektant;