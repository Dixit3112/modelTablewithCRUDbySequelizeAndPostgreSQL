//  Department controller file
// const Department = require('../allModels/department.model');
// const Employee = require('../allModels/employee.model');

// async function getDepartmentEmployees(departmentId) {
//   try {
//     const department = await Department.findByPk(departmentId, {
//       include: [{
//         model: Employee,
//         attributes: ['name', 'position'], // Fetch employee name and position
//       }],
//     });
//     if (!department) {
//       throw new Error('Department not found');
//     }
//     return department;
//   } catch (error) {
//     console.error('Error fetching department employees:', error.message);
//     throw error;
//   }
// }

// module.exports = getDepartmentEmployees;

//  Department controller file
const Department = require('../allModels/association');
const Employee = require('../allModels/association');

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
        attributes: ['name', 'position'], // Fetch/get employee name and position
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
}



module.exports = { getEmployeeDetails, getDepartmentEmployees };