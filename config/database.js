// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'postgres', 'postgres', 'Dixit@31091997', {
  host: "localhost",
  dialect: "postgres",
})

module.exports = sequelize;