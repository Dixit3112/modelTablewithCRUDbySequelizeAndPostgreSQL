// HR model file
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Department = require("./association");


const HR = sequelize.define('HR', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hrName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hrEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  departmentId: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),   // Array to store multiple department IDs
    references: {
      model: Department,
      key: 'id',
      as: 'Department'
    },
    allowNull: false,
  }
},
{
  timestamps: true,
  getterMethods: {
    createdAt(){
      return moment(this.getDataValue('createdAt')).format('DD-MMM-YYYY, h:mm:ss a');
    },
    updatedAt(){
      return moment(this.getDataValue('updatedAt')).format('DD-MMM-YYYY, h:mm:ss a');
    }
  }
});

module.exports = HR;