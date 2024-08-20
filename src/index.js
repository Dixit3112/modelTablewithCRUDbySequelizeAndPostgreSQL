// main file index.js as server file
const express = require('express');
const sequelize = require('../config/database.js');
const {Employee, Department, Salary} = require('../allModels/association.js');


const app = express();
app.use(express.json());

// Sync Database
sequelize.sync()
  .then(() => {
    console.log('Database synced perfectly.');
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });

// API Routes
app.use('/api/employees', require('../routes/employee_router.js'));
app.use('/api/departments', require('../routes/department_router.js'));
app.use('/api/salaries', require('../routes/salary_router.js'))

const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});