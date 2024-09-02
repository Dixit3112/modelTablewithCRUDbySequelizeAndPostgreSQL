// main file index.js as server file
const express = require('express');
const cors = require('cors');
const sequelize = require('../config/database.js');
const {Employee, Department, Salary} = require('../allModels/association.js');


const app = express();
app.use(express.json());
app.use(cors());

// Sync Database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synced perfectly.');
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });

// API Routes
app.use('/api/employees', require('../routes/employee_router.js'));
app.use('/api/departments', require('../routes/department_router.js'));
app.use('/api/salaries', require('../routes/salary_router.js'));
// app.use('/api/hr', require('../routes/hr_routes.js'));


const PORT = 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});