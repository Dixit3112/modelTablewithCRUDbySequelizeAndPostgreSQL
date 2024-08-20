// employee controller file
const Employee = require('../allModels/employee.model');
const Department = require('../allModels/department.model');
const Salary = require('../allModels/salary.model');

async function getEmployeeDetails(employeeId) {  
  try {  
    const employee = await Employee.findByPk(employeeId, {  
      include: [
        {
          model: Department,
          attributes: ['name'], // Only include department name
          as: 'department', 
        },
        {
          model: Salary,
          attributes: ['salary'], // Only include salary
          as: 'salary',
        }
      ],
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

module.exports = getEmployeeDetails;