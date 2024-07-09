const {Sequelize}=require('sequelize')
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME,process.env.DB_PASSWORD, {
    host: process.env.LOCAL_HOST,
    dialect: 'mysql'
});

module.exports = sequelize;