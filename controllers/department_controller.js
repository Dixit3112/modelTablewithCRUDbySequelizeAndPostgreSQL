//  Department controller file
const Department = require('../allModels/department.model');
const Employee = require('../allModels/employee.model');

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
}

module.exports = getDepartmentEmployees;