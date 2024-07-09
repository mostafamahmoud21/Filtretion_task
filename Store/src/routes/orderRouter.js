const express=require('express')
const OrderRouter=express.Router()
const OrderController=require('../controllers/orderController.js')

OrderRouter.get('/',OrderController.getAllOrders)
OrderRouter.get('/:id',OrderController.getOrderById)
OrderRouter.post('/',OrderController.createOrder)
OrderRouter.put('/:id',OrderController.updateOrder)
OrderRouter.delete('/:id',OrderController.deleteOrder)

module.exports=OrderRouter