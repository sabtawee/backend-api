var Sequelize = require("sequelize");
var db = require("../config/database");

var { DataTypes } = Sequelize;
var ResultModel = db.define("scrap", {
  Control: {
    type: DataTypes.STRING,
  },
  Name: {
    type: DataTypes.STRING,
  },
  Reel: {
    type: DataTypes.STRING,
  },
  Size: {
    type: DataTypes.STRING,
  },
  Line: {
    type: DataTypes.STRING,
  },
  Shift: {
    type: DataTypes.STRING,
  },
  Emp: {
    type: DataTypes.STRING,
  },
  Weight: {
    type: DataTypes.STRING,
  },
  Shiftto: {
    type: DataTypes.STRING,
  },
  remark: {
    type: DataTypes.STRING
  }
}, {
    freezeTableName: true
});

module.exports = ResultModel