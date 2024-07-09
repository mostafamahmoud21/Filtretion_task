const { DataTypes } = require('sequelize');
const sequelize = require('../connection_database.js');

const Product = sequelize.define('Product', {
    ProductId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price: {
        type:DataTypes.FLOAT,
        allowNull:false,
        validate:{
            min:0
        }
    },
    Stock: {
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            min:0
        }
    }
})

sequelize.sync()
module.exports=Product