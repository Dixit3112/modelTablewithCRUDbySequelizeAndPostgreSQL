// Department File
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const moment = require('moment');
const Employee = require('../allModels/employee.model');  

const Department = sequelize.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
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
async function getEmployeeDetails(employeeId) {  
  try {  
    const employee = await Employee.findByPk(employeeId, {  
      include: [{  
        model: Department,  
        attributes: ['name'], // Only include the department name  
        as: 'department', // Match the alias defined in the model  
      }],  
    });  

    if (!employee) {  
      throw new Error('Employee not found');  
    }  

    return employee;  
  } catch (error) {  
    console.error('Error fetching employee details:', error.message);  
    throw error;  
  }  
}  
// Fetch all employees in a department
async function getDepartmentEmployees(departmentId) {
  try {
    const department = await Department.findByPk(departmentId, {
      include: [{
        model: Employee,
        attributes: ['name', 'position'], // Fetch employee name and position
      }],
    });
    if (!department) {
      throw new Error('Department not found');
    }
    return department;
  } catch (error) {
    console.error('Error fetching department employees:', error.message);
    throw error;
  }
};

module.exports = { getEmployeeDetails, getDepartmentEmployees };
module.exports = Department;

// // Department File
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const moment = require('moment');
// // const Employee = require('../allModels/employee.model');

// const Department = sequelize.define('Department', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// }, {
//   // tableName: 'Department',
//   timestamps: true,
//   getterMethods: {
//     createdAt() {
//       return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
//     },
//     updatedAt() {
//       return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY');
//     }
//   }
// });


// module.exports = Department;