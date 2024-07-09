const express=require('express')
const sequelize = require('./database/connection_database.js')
const productRouter = require('./routes/productRouter.js')
const OrderRouter = require('./routes/orderRouter.js')
const dotenv = require('dotenv');
dotenv.config();

const app=express()

app.use(express.json())
app.use('/api/products',productRouter)
app.use('/api/orders',OrderRouter)

app.listen(process.env.PORT,()=>{
console.log("server running...")
})