﻿# modelTablewithCRUDbySequelizeAndPostgreSQL

 Basic UnderStanding for this code file in gujarati + English.

### 1. **Main File: `index.js` (Server Setup)**
- **`const express = require('express');`**: Ahiya Express.js (ek web framework) ne require kari rahya che.
- **`const sequelize = require('../config/database.js');`**: Ahiya Sequelize ne `database.js` file thi require kari rahya che. Aa Sequelize instance che jo database ne manage karse.
- **`const {Employee, Department, Salary} = require('../allModels/association.js');`**: Ahiya tamara `Employee`, `Department`, ane `Salary` models import karva ma aave che, jo associations (relationships) ne set kare che.

- **`const app = express();`**: Ahiya `app` variable ma Express application create kariye che.
- **`app.use(express.json());`**: Ahiya `express.json()` middleware use kariye che, je incoming JSON requests ne handle kare che.

- **`sequelize.sync()`**: Ahiya database ne sync kariye che. SQLite, MySQL, PostgreSQL vagaire databases ma tables ne create kare che jo tables aagad thi na hoy.
- **`.then()`**: Ahiya sync successful thay te case ma message log kare che.
- **`.catch()`**: Error aave to error log kare che.

- **`app.use('/api/employees', require('../routes/employee_router.js'));`**: Aa line ma employee router ne `'/api/employees'` endpoint par attach kariye che. Jevi rite department and salary routers ne pan attach kare che.

- **`const PORT = 3500;`**: Port number set kariyo che, je thi server run thase.
- **`app.listen(PORT, () => { console.log(\`Server is running on port ${PORT}\`); });`**: Server ne start kare che ane console ma message print kare che ke server kay port number par run kari rahyo che.

### 2. **`config/database.js` (Database Configuration)**
- **`const { Sequelize } = require('sequelize');`**: Ahiya Sequelize package ne import kariye che.
- **`const sequelize = new Sequelize('postgres', 'postgres', 'Dixit@31091997', { host: 'localhost', dialect: 'postgres', });`**: Aa line ma Sequelize instance create kariye che jema database configuration che. `postgres` dialect ne specify kare che.
- **`module.exports = sequelize;`**: Finally, aa sequelize instance ne export kariye che baki ni files ma use karva mate.

### 3. **`allModels/association.js` (Model Associations)**
- **`const Employee = require('./employee.model');`**: Employee model import kariyo che.
- **`const Salary = require('./salary.model');`**: Salary model import kariyo che.
- **`const Department = require('./department.model');`**: Department model import kariyo che.

- **`Employee.hasOne(Salary, { foreignKey: 'employeeID' });`**: Employee ane Salary models vache `hasOne` association setup kariye che. Ahiya Employee ni ek salary hoy te define kare che.
- **`Salary.belongsTo(Employee, { foreignKey: 'employeeID' });`**: Salary model `belongsTo` association setup kare che je Employee ke sath link kare che.

- **`Department.hasMany(Employee, { foreignKey: 'departmentId' });`**: Ek department ma ghana employee hoy sakhe te define kare che.
- **`Employee.belongsTo(Department, { as: 'Department', foreignKey: 'departmentId' });`**: Employee model `belongsTo` Department association setup kare che.

- **`module.exports = { Employee, Salary, Department };`**: Aa models ne export kariye che, jethi baki ni files ma use thay sake.

### 4. **`allModels/employee.model.js` (Employee Model)**
- **`const { DataTypes } = require('sequelize');`**: Ahiya Sequelize ma thi `DataTypes` import kariye che, je model ni fields define karva ma use thay.
- **`const sequelize = require('../config/database');`**: Sequelize instance ne import kariye che.
- **`const Department = require('./department.model');`**: Department model import kariyo che.
- **`const moment = require('moment');`**: Moment.js import kariyo che je date formatting ma use thase.

- **`const Employee = sequelize.define('Employee', { ... }, { ... });`**: Aa line ma `Employee` model define kariyo che jema `name`, `position`, ane `departmentId` fields che. `timestamps: true` je createdAt ane updatedAt fields automatically manage kare che.

- **`getterMethods: { createdAt(), updatedAt() }`**: Aa getter methods na use thi createdAt ane updatedAt fields ne specific format ma convert kari ne return kariye che.

- **`module.exports = Employee;`**: Employee model export kariyo che baki ni files ma use karva mate.

### 5. **`routes/employee_router.js` (Employee Routes)**
- **`const express = require('express');`**: Express import kariyo che.
- **`const router = express.Router();`**: Router instance create kariyo che, je alag alag routes define karva ma use thase.
- **`const Employee = require('../allModels/employee.model');`**: Employee model import kariyo che.
- **`const Salary = require('../allModels/salary.model');`**: Salary model import kariyo che.
- **`const getEmployeeDetails = require('../controllers/employee_controller');`**: Employee details fetch karva mate controller import kariyo che.

- **`router.post('/', async (req, res) => { ... });`**: Aa route ma new employee create karva mate POST request handle kare che.
- **`router.get('/', async (req, res) => { ... });`**: Aa route ma employee list fetch kari ne response ma send kare che.
- **`router.get('/:id', async (req, res) => { ... });`**: Aa route ma specific employee na details fetch kare che ID thi.
- **`router.put('/:id', async (req, res) => { ... });`**: Aa route ma employee details update kare che ID ne base par.
- **`router.delete('/:id', async (req, res) => { ... });`**: Aa route ma specific employee ne delete kare che ID thi.

- **`module.exports = router;`**: Router ne export kariyo che, je `index.js` file ma import kari ne use kari sake.

### 6. **`controllers/employee_controller.js` (Employee Controller)**
- **`const Employee = require('../allModels/employee.model');`**: Employee model import kariyo che.
- **`const Department = require('../allModels/department.model');`**: Department model import kariyo che.
- **`const Salary = require('../allModels/salary.model');`**: Salary model import kariyo che.

- **`async function getEmployeeDetails(employeeId) { ... }`**: Aa function employee ID thi employee details fetch kare che ane sath ma department ane salary ni details pan include kare che.
- **`module.exports = getEmployeeDetails;`**: Function ne export kariyo che, je `employee_router.js` file ma use kari sake.

### 7. **`allModels/department.model.js` (Department Model)**
- **`const { DataTypes } = require('sequelize');`**: Data types import kariyo che Sequelize ma thi.
- **`const sequelize = require('../config/database');`**: Sequelize instance import kariyo che.
- **`const moment = require('moment');`**: Moment.js import kariyo che.

- **`const Department = sequelize.define('Department', { ... }, { ... });`**: Aa line ma `Department` model define kare che. `name` field che department na naam ne store kare che.
- **`getterMethods: { createdAt(), updatedAt() }`**: Aa methods time stamp ne specific format ma convert kare che.

- **`async function getEmployeeDetails(employeeId) { ... }`**: Aa function employee details fetch kare che employee ID thi.
- **`async function getDepartmentEmployees(departmentId) { ... }`**: Aa function department ID thi employees fetch kare che jo specific department ma hoy.

- **`module.exports = { getEmployeeDetails, getDepartmentEmployees };`**: Functions ne export kare che.

### 8. **`routes/department_router.js` (Department Routes)**
- **`const express = require('express');`**: Express import kariyo che.
- **`const router = express.Router();`**: Router instance create kariyo che.
- **`const Department = require('../allModels/department.model');`**: Department model import kariyo che.
- **`const Employee = require('../allModels/employee.model');`**: Employee model import kariyo che.
- **`const getDepartmentEmployees = require('../controllers/department_controller');`**: Department employees fetch karva mate controller import kariyo che.

- **`router.post('/', async (req, res) => { ... });`**: Aa route ma new department create kare che.
- **`router.get('/', async (req, res) => { ... });`**: Aa route ma department ni list fetch

 kari ne response ma send kare che.
- **`router.get('/:id/employees', async (req, res) => { ... });`**: Aa route ma department ID thi employee details fetch kare che.
- **`router.put('/:id', async (req, res) => { ... });`**: Aa route ma department details update kare che.
- **`router.delete('/:id', async (req, res) => { ... });`**: Aa route ma specific department delete kare che.

- **`module.exports = router;`**: Router export kariyo che, je index.js ma use thase.

Aa code na alag alag parts ne samjhi ne tame pura project no flow samji sako cho. Su tame aa code ma biji koi madad joiye che?
