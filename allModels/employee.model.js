// Employee model file
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./department.model');
const moment = require('moment');
// const Salary = require('./salary.model');

const Employee = sequelize.define('Employee', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Department,
      key: 'id',
    }
  },
}, {
  timestamps: true,
  getterMethods: {
    createdAt() {
      return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY, h:mm:ss a');
    },
    updatedAt() {
      return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY, h:mm:ss a');
    }
  }
});

module.exports = Employee;