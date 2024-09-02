// HR Migration file
const { DataTypes } = require('sequelize');
// const HR = require('../allModels/hr.model');
// const Department = require('../allModels/department.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable('HR', {
      hrId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'HR',
          key: 'id',
        },
        allowNull: false,
      },
      departmentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Departments',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('HR');
  },
};