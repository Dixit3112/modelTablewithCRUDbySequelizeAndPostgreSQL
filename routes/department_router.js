// department.router.js
const express = require('express');
const router = express.Router();
const Department = require('../allModels/department.model');
const Employee = require('../allModels/employee.model');
const getDepartmentEmployees = require('../controllers/department_controller');

// Create a new department
router.post('/', async (req, res) => {
  try {
    const department = await Department.create(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all departments with employees
router.get('/', async (req, res) => {
  try {
    const departments = await Department.findAll({
      include: [{ model: Employee }], // Include employee details
    });
    res.status(200).json(departments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read one department by ID with employees
router.get('/:id', async (req, res) => {
  try {
    const department = await getDepartmentEmployees(req.params.id); // Call the function here
    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a department
router.put('/:id', async (req, res) => {
  try {
    const department = await Department.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a department
router.delete('/:id', async (req, res) => {
  try {
    await Department.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Department deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
