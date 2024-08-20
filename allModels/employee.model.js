// Employee model file
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Department = require('./department.model');
const moment = require('moment');
const Salary = require('./salary.model');

const Employee = sequelize.define('Employee', {
  name: {
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
      model: Department.name,
      key: 'id',
    }
  }
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

// async function getEmployeeDetails(employeeId) {  
//   try {  
//     const employee = await Employee.findByPk(employeeId, {  
//       include: [
//         {
//           model: Department,
//           attributes: ['name'], // Only include department name
//           as: 'department',
//         },
//         {
//           model: Salary,
//           attributes: ['salary'], // Only include salary
//         }
//       ],
//     });

//     if (!employee) {
//       throw new Error('Employee not found');
//     }

//     return employee;
//   } catch (error) {
//     console.error('Error fetching employee details:', error.message);
//     throw error;
//   }
// }

// Association setup
// Department.hasMany(Employee, { foreignKey: 'departmentId' });
// Employee.belongsTo(Department, { foreignKey: 'departmentId' });

// Employee.hasOne(Salary, { foreignKey: 'employeeID' });
// // Salary.belongsTo(Employee, { foreignKey: 'employeeID' });