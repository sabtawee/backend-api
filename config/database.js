const Sequeliize = require('sequelize')

const db = new Sequeliize("smartweight", "root", "P@ssw0rd", {
    host: "10.121.42.48",
    dialect: "mysql",
    define:{
        timestamps: false,
    },
})

module.exports = db;
