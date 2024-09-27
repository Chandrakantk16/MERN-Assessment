const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

// Create a new employee
router.post('/', async (req, res) => {
  const { name, email, mobile, designation, image } = req.body;

  try {
    const employee = new Employee({ name, email, mobile, designation, image });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all employees
router.get('/', async (_req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update an employee
router.put('/:id', async (req, res) => {
  const { name, email, mobile, designation, image } = req.body;

  try {
    let employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    employee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, mobile, designation, image },
      { new: true }
    );

    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ msg: 'Employee not found' });

    await Employee.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Employee removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
