// Salary model file
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const moment = require('moment');
const Employee = require('./employee.model');
// const Department = require('./department.model');

// id: {
//   type: DataTypes.INTEGER,
//   autoIncrement: true,
//   primaryKey: true,
// },
const Salary = sequelize.define('Salary', {
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  employeeID: {
    type: DataTypes.INTEGER,
    references: {
      model: Employee,
      key: 'id',
    },
  },
}, {
  timestamps: true,
  getterMethods: {
    createdAt() {
      return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
    },
    updatedAt() {
      return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY');
    },
  }
});

// Association setup
// Employee.hasOne(Salary, { foreignKey: 'employeeID' });
// Salary.belongsTo(Employee, { foreignKey: 'employeeID' });


module.exports = Salary;