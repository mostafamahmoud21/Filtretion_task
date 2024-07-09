const { DataTypes } = require('sequelize');
const sequelize = require('../connection_database.js');
const Product = require('./Products.js');

const Oredr = sequelize.define('Order', {
    OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    CustomerId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    OrderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    TotalAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0
        }
    }
})

module.exports=Oredr