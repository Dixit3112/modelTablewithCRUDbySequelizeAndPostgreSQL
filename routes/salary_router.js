// salary routing file
const express = require('express');
const router = express.Router();
const Salary = require('../allModels/salary.model');

// Create a new salary record
router.post('/', async (req, res) => {
  try {
    const salary = await Salary.create(req.body);
    res.status(201).json(salary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all salaries
router.get('/', async (req, res) => {
  try {
    const salaries = await Salary.findAll();
    res.status(200).json(salaries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a salary
router.put('/:id', async (req, res) => {
  try {
    const salary = await Salary.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(salary);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a salary record
router.delete('/:id', async (req, res) => {
  try {
    await Salary.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: 'Salary deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;