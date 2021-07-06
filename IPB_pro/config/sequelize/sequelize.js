const Sequelize = require('sequelize');

const sequelize = new Sequelize('ipb_pro', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;