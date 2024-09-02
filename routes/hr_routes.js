// HR routing file
const express = require('express');
const HR = require('../allModels/hr.model');
const { createHR, getAllHRs, updateHR, deleteHR, getHR } = require('../controllers/hr_controller');
const router = express.Router();

// Create HR
router.post('/', createHR);

// Get all HRs and HR by id
router.get('/', getAllHRs);
router.get('/:id', getHR);

// Update HR by id
router.put('/:id', updateHR);

// Delete HR by id
router.delete('/:id', deleteHR);

module.exports = router;