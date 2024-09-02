// "Unable to sync database: Error
//     at Query.run (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\sequelize\lib\dialects\postgres\query.js:50:25)
//     at C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\sequelize\lib\sequelize.js:315:28
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
//     at async Employee.sync (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\sequelize\lib\model.js:984:11)
//     at async Sequelize._syncModelsWithCyclicReferences (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\sequelize\lib\sequelize.js:398:7) {
//   name: 'SequelizeForeignKeyConstraintError',
//   parent: error: insert or update on table "Employees" violates foreign key constraint "Employees_departmentId_fkey1"
//       at Parser.parseErrorMessage (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\parser.js:283:98)
//       at Parser.handlePacket (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\parser.js:122:29)
//       at Parser.parse (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\parser.js:35:38)
//       at Socket.<anonymous> (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\index.js:11:42)
//       at Socket.emit (node:events:518:28)
//       at addChunk (node:internal/streams/readable:559:12)
//       at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
//       at Readable.push (node:internal/streams/readable:390:5)
//       at TCP.onStreamRead (node:internal/stream_base_commons:190:23) {
//     length: 281,
//     severity: 'ERROR',
//     code: '23503',
//     detail: 'Key (departmentId)=(2) is not present in table "departments".',
//     hint: undefined,
//     position: undefined,
//     internalPosition: undefined,
//     internalQuery: undefined,
//     where: undefined,
//     schema: 'public',
//     table: 'Employees',
//     column: undefined,
//     dataType: undefined,
//     constraint: 'Employees_departmentId_fkey1',
//     file: 'ri_triggers.c',
//     line: '2619',
//     routine: 'ri_ReportViolation',
//     sql: 'ALTER TABLE "Employees"  ADD FOREIGN KEY ("departmentId") REFERENCES "departments" ("id") ON DELETE CASCADE ON UPDATE CASCADE;',
//     parameters: undefined
//   },
//   original: error: insert or update on table "Employees" violates foreign key constraint "Employees_departmentId_fkey1"
//       at Parser.parseErrorMessage (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\parser.js:283:98)
//       at Parser.handlePacket (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\parser.js:122:29)
//       at Parser.parse (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\parser.js:35:38)
//       at Socket.<anonymous> (C:\Users\krish\Desktop\Program code\dixit_react\tableTryBySequelizeSql\node_modules\pg-protocol\dist\index.js:11:42)
//       at Socket.emit (node:events:518:28)
//       at addChunk (node:internal/streams/readable:559:12)
//       at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
//       at Readable.push (node:internal/streams/readable:390:5)
//       at TCP.onStreamRead (node:internal/stream_base_commons:190:23) {
//     length: 281,
//     severity: 'ERROR',
//     code: '23503',
//     detail: 'Key (departmentId)=(2) is not present in table "departments".',
//     hint: undefined,
//     position: undefined,
//     internalPosition: undefined,
//     internalQuery: undefined,
//     where: undefined,
//     schema: 'public',
//     table: 'Employees',
//     column: undefined,
//     dataType: undefined,
//     constraint: 'Employees_departmentId_fkey1',
//     file: 'ri_triggers.c',
//     line: '2619',
//     routine: 'ri_ReportViolation',
//     sql: 'ALTER TABLE "Employees"  ADD FOREIGN KEY ("departmentId") REFERENCES "departments" ("id") ON DELETE CASCADE ON UPDATE CASCADE;',
//     parameters: undefined
//   },
//   sql: 'ALTER TABLE "Employees"  ADD FOREIGN KEY ("departmentId") REFERENCES "departments" ("id") ON DELETE CASCADE ON UPDATE CASCADE;',
//   parameters: {},
//   table: 'Employees',
//   fields: null,
//   value: undefined,
//   index: 'Employees_departmentId_fkey1',
//   reltype: undefined
// }
// " this error is getting by this code which is given below of all file's
// ----------
// "// main file index.js as server file
// const express = require('express');
// const sequelize = require('../config/database.js');
// const {Employee, Department, Salary, HR} = require('../allModels/association.js');
// const app = express();
// app.use(express.json());
// // Sync Database
// sequelize.sync()
//   .then(() => {
//     console.log('Database synced perfectly.');
//   })
//   .catch((err) => {
//     console.error('Unable to sync database:', err);
//   });
// // API Routes
// app.use('/api/employees', require('../routes/employee_router.js'));
// app.use('/api/departments', require('../routes/department_router.js'));
// app.use('/api/salaries', require('../routes/salary_router.js'));
// app.use('/api/hr', require('../routes/hr_routes.js'));
// const PORT = 3500;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });",

// "// config/database.js
// const { Sequelize } = require('sequelize');
// // const sequelize = new Sequelize( 'database Name', 'username', 'database password', {options like host, dialect, logging, etc...})
// const sequelize = new Sequelize( 'postgres', 'postgres', 'Dixit@31091997', {
//   host: "localhost",
//   dialect: "postgres",
// });
// module.exports = sequelize;",

// "// Association file/ RelationShip file
// const Employee = require('./employee.model');
// const Salary = require('./salary.model');
// const Department = require('./department.model');
// const HR = require('./hr.model');
// // Associate the models
// Employee.hasOne(Salary, { foreignKey: 'employeeID' });
// Salary.belongsTo(Employee, { foreignKey: 'employeeID'});
// Department.hasMany(Employee, { foreignKey: 'departmentId' });
// Employee.belongsTo(Department, {as: 'department', foreignKey: 'departmentId' });
// HR.belongsToMany(Department,  { through: 'HR', foreignKey: 'id' });
// Department.belongsTo(HR,  { through: 'HR', foreignKey: 'id' });
// HR.belongsTo(Department, { foreignKey: 'departmentId', as: 'department' });
// HR.hasMany(Employee, { foreignKey: 'employeeId', as: 'Employee'});
// module.exports = { Employee, Salary, Department, HR };",

// "// Employee model file
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const Department = require('./department.model');
// const moment = require('moment');
// // const Salary = require('./salary.model');
// const Employee = sequelize.define('Employee', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   position: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   departmentId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Department,
//       key: 'id',
//     }
//   }
// }, {
//   timestamps: true,
//   getterMethods: {
//     createdAt() {
//       return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY, h:mm:ss a');
//     },
//     updatedAt() {
//       return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY, h:mm:ss a');
//     }
//   }
// });
// module.exports = Employee;","// employee controller file
// const Employee = require('../allModels/employee.model');
// const Department = require('../allModels/department.model');
// const Salary = require('../allModels/salary.model');
// async function getEmployeeDetails(employeeId) {
//   try {
//     const employee = await Employee.findByPk(employeeId, {
//       include: [
//         {
//           model: Department,
//           attributes: ['name'], // Only include department name
//           as: 'department',
//         },
//         {
//           model: Salary,
//           attributes: ['salary'], // Only include salary
//           as: 'salary',
//         }
//       ],
//     });
//     if (!employee) {
//       throw new Error('Employee not found'); 
//     }
//     return employee;
//   } catch (error) {
//     console.error('Error fetching employee details:', error.message);
//     throw error;
//   }
// }
// module.exports = getEmployeeDetails;",

// "// HR controller file
// const Department = require("../allModels/department.model");
// const Employee = require("../allModels/employee.model");
// const HR = require("../allModels/hr.model");
// // create new HR
// async function createHR(req, res) {
//   try{
//     const hr = await HR.create(req.body);

//     // const department = Department.findAll({ where: { id: Department.id } });
//     const department = Department.findAll({ where: { id: req.params.id } });
//     await hr.addDepartments(department);
//     console.log("Data is Created");

//     res.status(201).json(hr);
//   } catch (err) {
//     res.status(400).json({ Error: err.message});
//   }
// };
// async function getHR(req, res) {
//   try{
//     const hr = await HR.findByPk(req.params.id, {
//       include: [{ model: Department }]
//     });
//     if(!hr){
//       throw new Error('HR not found');
//     }
//     res.status(200).json(hr);
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// };
// // Get all HR records
// async function getAllHRs(req, res) {
//   try{
//     const hrList = await HR.findAll({
//       include: [
//         {
//           model: Department,
//           as: "Department",
//           attributes: ['name']
//         },
//         {
//           model: Employee,
//           as: "Employee",
//           attributes: ['id', 'name', 'position'],
//         }
//       ]
//     });
//     res.status(200).json(hrList);
//   } catch (err){
//     res.status(400).json({ Error: err.message });
//   }
// }
// // Update HR
// async function updateHR(req, res) {
//   try{
//     const [updated] = await HR.update(req.body, {
//       where: { id: req.params.id },
//       returning: true
//     });
//     if (!updated) {
//       return res.status(404).send("HR not found");
//     }
//     const updatedHR = await  HR.findByPk(req.params.id);
//     res.status(200).json(updatedHR);
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// }
// // Delete HR
// async function deleteHR(req, res) {
//   try {
//     const hr = await HR.findByPk(req.params.id);
//     if (!hr) {
//       return res.status(404).send("HR not found");
//     }
//     await hr.destroy();
//     res.status(200).send("HR deleted");
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// }
// module.exports = { createHR, getHR, getAllHRs, updateHR, deleteHR };",

// "// Department File
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const moment = require('moment');
// // const Employee = require('../allModels/employee.model');
// const Department = sequelize.define('department', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// }, {
//   timestamps: true,
//   getterMethods: {
//     createdAt() {
//       return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
//     },
//     updatedAt() {
//       return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY');
//     }
//   }
// });
// module.exports = Department;","//  Department controller file
// const Department = require('../allModels/department.model');
// const Employee = require('../allModels/employee.model');
// // Fetch all employees in a department
// async function getDepartmentEmployees(departmentId) {
//   try {
//     const department = await Department.findByPk(departmentId, {
//       include: [{
//         model: Employee,
//         attributes: ['name', 'position'], // Fetch/get employee name and position
//       }],
//     });
//     if (!department) {
//       throw new Error('Department not found');
//     }
//     return department;
//   } catch (error) {
//     console.error('Error fetching department employees:', error.message);
//     throw error;
//   }
// }
// async function getEmployeeDetails(employeeId) {
//   try {
//     const employee = await Employee.findByPk(employeeId, {
//       include: [{
//         model: Department,
//         attributes: ['name'], // Only include the department name
//         as: 'department', // Match the alias defined in the model
//       }],
//     });

//     if (!employee) {
//       throw new Error('Employee not found');
//     }

//     return employee;  
//   } catch (error) {
//     console.error('Error fetching employee details:', error.message);
//     throw error;
//   }
// }
// module.exports = { getEmployeeDetails, getDepartmentEmployees };",

// "// department.router.js
// const express = require('express');
// const router = express.Router();
// const Department = require('../allModels/department.model');
// const Employee = require('../allModels/employee.model');
// const getDepartmentEmployees = require('../controllers/department_controller');
// // Create a new department
// router.post('/', async (req, res) => {
//   try {
//     const department = await Department.create(req.body);
//     res.status(201).json(department);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Read all departments with employees
// router.get('/', async (req, res) => {
//   try {
//     const departments = await Department.findAll({
//       include: [{ model: Employee }], // Include employee details
//     });
//     res.status(200).json(departments);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Read one department by ID with employees
// router.get('/:id', async (req, res) => {
//   try {
//     const department = await getDepartmentEmployees(req.params.id); // Call the function here
//     res.status(200).json(department);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Update a department
// router.put('/:id', async (req, res) => {
//   try {
//     const department = await Department.update(req.body, {
//       where: { id: req.params.id }
//     });
//     res.status(200).json(department);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Delete a department
// router.delete('/:id', async (req, res) => {
//   try {
//     await Department.destroy({ where: { id: req.params.id } });
//     res.status(200).json({ message: 'Department deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// module.exports = router;",

// "// Salary model file
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const moment = require('moment');
// const Employee = require('./employee.model');
// // const Department = require('./department.model');
// const Salary = sequelize.define('Salary', {
//   salary: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   employeeID: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Employee,
//       key: 'id',
//     },
//     allowNull: false,
//   },
// }, {
//   timestamps: true,
//   getterMethods: {
//     createdAt() {
//       return moment(this.getDataValue('createdAt')).format('DD-MM-YYYY');
//     },
//     updatedAt() {
//       return moment(this.getDataValue('updatedAt')).format('DD-MM-YYYY');
//     },
//   }
// });
// module.exports = Salary;","// salary routing file
// const express = require('express');
// const router = express.Router();
// const Salary = require('../allModels/salary.model');
// // Create a new salary record
// router.post('/', async (req, res) => {
//   try {
//     const salary = await Salary.create(req.body);
//     res.status(201).json(salary);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Read all salaries
// router.get('/', async (req, res) => {
//   try {
//     const salaries = await Salary.findAll();
//     res.status(200).json(salaries);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Update a salary
// router.put('/:id', async (req, res) => {
//   try {
//     const salary = await Salary.update(req.body, {
//       where: { id: req.params.id }
//     });
//     res.status(200).json(salary);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// // Delete a salary record
// router.delete('/:id', async (req, res) => {
//   try {
//     await Salary.destroy({ where: { id: req.params.id } });
//     res.status(200).json({ message: 'Salary deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// module.exports = router;", "// HR model file
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");
// const Department = require("./department.model");
// const HR = sequelize.define('HR', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   hrName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   hrEmail: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//     validate: {
//       isEmail: true,
//     },
//   },
//   departmentId: {
//     type: DataTypes.INTEGER,   // Array to store multiple department IDs
//     references: {
//       model: Department.name,
//       key: 'id',
//       as: 'department'
//     },
//     allowNull: false,
//   }
// },
// {
//   timestamps: true,
//   getterMethods: {
//     createdAt(){
//       return moment(this.getDataValue('createdAt')).format('DD-MMM-YYYY, h:mm:ss a');
//     },
//     updatedAt(){
//       return moment(this.getDataValue('updatedAt')).format('DD-MMM-YYYY, h:mm:ss a');
//     }
//   }
// });
// module.exports = HR;", "const Department = require("../allModels/department.model");
// const Employee = require("../allModels/employee.model");
// const HR = require("../allModels/hr.model");
// // create new HR
// async function createHR(req, res) {
//   try{
//     const hr = await HR.create(req.body);

//     // const department = Department.findAll({ where: { id: Department.id } });
//     const department = Department.findAll({ where: { id: req.params.id } });
//     await hr.addDepartments(department);
//     console.log("Data is Created");

//     res.status(201).json(hr);
//   } catch (err) {
//     res.status(400).json({ Error: err.message});
//   }
// };
// async function getHR(req, res) {
//   try{
//     const hr = await HR.findByPk(req.params.id, {
//       include: [{ model: Department }]
//     });
//     if(!hr){
//       throw new Error('HR not found');
//     }
//     res.status(200).json(hr);
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// };
// // Get all HR records
// async function getAllHRs(req, res) {
//   try{
//     const hrList = await HR.findAll({
//       include: [
//         {
//           model: Department,
//           as: "Department",
//           attributes: ['name']
//         },
//         {
//           model: Employee,
//           as: "Employee",
//           attributes: ['id', 'name', 'position'],
//         }
//       ]
//     });
//     res.status(200).json(hrList);
//   } catch (err){
//     res.status(400).json({ Error: err.message });
//   }
// };
// // Update HR
// async function updateHR(req, res) {
//   try{
//     const [updated] = await HR.update(req.body, {
//       where: { id: req.params.id },
//       returning: true
//     });
//     if (!updated) {
//       return res.status(404).send("HR not found");
//     }
//     const updatedHR = await  HR.findByPk(req.params.id);
//     res.status(200).json(updatedHR);
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// };
// // Delete HR
// async function deleteHR(req, res) {
//   try {
//     const hr = await HR.findByPk(req.params.id);
//     if (!hr) {
//       return res.status(404).send("HR not found");
//     }
//     await hr.destroy();
//     res.status(200).send("HR deleted");
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//   }
// };
// module.exports = { createHR, getHR, getAllHRs, updateHR, deleteHR };", "// HR routing file
// const express = require('express');
// const HRManager = require('../allModels/hr.model');
// const { createHR, getAllHRs, updateHR, deleteHR, getHR } = require('../controllers/hr_controller');
// const router = express.Router();
// // Create HR
// router.post('/', createHR);
// // Get all HRs and HR by id
// router.get('/', getAllHRs);
// router.get('/:id', getHR);
// // Update HR by id
// router.put('/:id', updateHR);
// // Delete HR by id
// router.delete('/:id', deleteHR);
// module.exports = router;","// HR Migration file
// const { DataTypes } = require('sequelize');
// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.createTable('HR', {
//       hrId: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'HR',
//           key: 'id',
//         },
//         allowNull: false,
//       },
//       departmentId: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'Departments',
//           key: 'id',
//         },
//         allowNull: false,
//       },
//     });
//   },
//   down: async (queryInterface) => {
//     await queryInterface.dropTable('HR');
//   },
// };" solve alll file's code and give me perfect code for these tables which are created by model and also working perfectly and all Tables are created perfectly and ee badho code complete karine p6i mane samjavje sarkhi rite bcz mare sarkhi rite sikhvu 6 aa data base handling k jenathi proper database create kari sakish bija koi project ma etle.
// ----------------------------

