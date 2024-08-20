// config/database.js
const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize( 'database Name', 'username', 'database password', {options like host, dialect, logging, etc...})
const sequelize = new Sequelize( 'postgres', 'postgres', 'Dixit@31091997', {
  host: "localhost",
  dialect: "postgres",
})

module.exports = sequelize;