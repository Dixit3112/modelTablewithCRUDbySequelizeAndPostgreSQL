// Get HR by ID
// async function getHRById(req, res) {
//   try {
//     const hr = await HR.findByPk(req.params.id, {
//       include: [
//         {
//           model: Department,
//           attributes: ['name'],
//           as: 'Department',
//         },
//         {
//           model: Employee,
//           attributes: ['id', 'name', 'position'],
//           as: 'Employee',
//         }
//       ]
//     });
//     if (!hr) {
//       return res.status(404).send("HR not found");
//     }
//     res.status(200).json(hr);
//   } catch (err) {
//     console.log("Error: ", err.message);
//   }
// }
// const createHR = async (req, res) => {
//   try {
//     const { hrName, hrEmail, Departments } = req.body;

//     const hr = await HR.create({ hrName, hrEmail });
    
//     if (Departments && Departments.length > 0) {
//       await hr.setDepartments(Departments); // Associate the departments
//     }

//     res.status(201).json(hr);
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: "Validation error" });
//   }
// };

// HR controller file
const Department = require("../allModels/department.model");
const Employee = require("../allModels/employee.model");
const HR = require("../allModels/hr.model");

// create new HR
async function createHR(req, res) {
  try{
    const hr = await HR.create(req.body);

    // const department = Department.findAll({ where: { id: Department.id } });
    const department = Department.findAll({ where: { id: req.params.id } });
    await hr.addDepartments(department);
    console.log("Data is Created");

    res.status(201).json(hr);
  } catch (err) {
    res.status(400).json({ Error: err.message});
  }
};

async function getHR(req, res) {
  try{
    const hr = await HR.findByPk(req.params.id, {
      include: [{ model: Department }]
    });
    if(!hr){
      throw new Error('HR not found');
    }
    res.status(200).json(hr);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
}

// Get all HR records
async function getAllHRs(req, res) {
  try{
    const hrList = await HR.findAll({
      include: [
        {
          model: Department,
          as: "Department",
          attributes: ['name']
        },
        {
          model: Employee,
          as: "Employee",
          attributes: ['id', 'name', 'position'],
        }
      ]
    });
    res.status(200).json(hrList);
  } catch (err){
    res.status(400).json({ Error: err.message });
  }
}
// Update HR
async function updateHR(req, res) {
  try{
    const [updated] = await HR.update(req.body, {
      where: { id: req.params.id },
      returning: true
    });
    if (!updated) {
      return res.status(404).send("HR not found");
    }
    const updatedHR = await  HR.findByPk(req.params.id);
    res.status(200).json(updatedHR);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
}

// Delete HR
async function deleteHR(req, res) {
  try {
    const hr = await HR.findByPk(req.params.id);
    if (!hr) {
      return res.status(404).send("HR not found");
    }
    await hr.destroy();
    res.status(200).send("HR deleted");
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
}

module.exports = { createHR, getHR, getAllHRs, updateHR, deleteHR };
// module.exports = { createHR, getHR, getAllHRs, getHRById, updateHR, deleteHR };