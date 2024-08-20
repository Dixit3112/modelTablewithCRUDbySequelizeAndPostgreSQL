// Association file/ RelationShip file
const Employee = require('./employee.model');
const Salary = require('./salary.model');
const Department = require('./department.model');

// Associate the models
Employee.hasOne(Salary, { foreignKey: 'employeeID' });
Salary.belongsTo(Employee, { foreignKey: 'employeeID'});

Department.hasMany(Employee, { foreignKey: 'departmentId' });
Employee.belongsTo(Department, {as: 'Department', foreignKey: 'departmentId' });

module.exports = {Employee, Salary, Department};