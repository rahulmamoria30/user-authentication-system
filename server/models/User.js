const { DataTypes } = require("sequelize")
const sequelize = require("./index")

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

;(async () => {
  await sequelize.sync() 
  console.log("User table has been created.")
})()

module.exports = User
