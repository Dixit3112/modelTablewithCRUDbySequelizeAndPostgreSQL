const Employee = require('./employee.model');
const Salary = require('./salary.model');
const Department = require('./department.model');

// Associate the models
Department.hasMany(Employee, { foreignKey: 'departmentId' });
Employee.belongsTo(Department, { as: 'Department', foreignKey: 'departmentId' });

Employee.hasOne(Salary, { as: 'salary', foreignKey: 'employeeID' });
Salary.belongsTo(Employee, { as: 'Employee', foreignKey: 'employeeID' });

module.exports = { Employee, Salary, Department };