// employee router file
const express = require('express');
const router = express.Router();
const Employee = require('../allModels/employee.model');
const Salary = require('../allModels/salary.model');
const getEmployeeDetails = require('../controllers/employee_controller');
const Department = require('../allModels/department.model');

// Create new employee
router.post('/', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.findAll({
      include: [{
        model: Department,
        as: 'Department'  // This should match the alias used in the association
      },
      {
        model: Salary,
        as: 'salary'
      }
    ]
    });
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// // Read one employee by ID with department and salary
// router.get('/', async (req, res) => {
//   try {
//     const employee = await getEmployeeDetails(req.params.id);  // Call that function at here
//     res.status(200).json(employee);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Update an employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Employee deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;