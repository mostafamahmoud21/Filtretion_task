const Oredr = require('../database/models/Orders.js');

const createOrder = async (req, res) => {
    const { CustomerId, OrderDate, TotalAmount } = req.body;
    try {
        const oredr = await Oredr.create({ CustomerId, OrderDate, TotalAmount })
        res.status(200).json({message:"Order Created Successfully"})
    } catch (error) {
        res.status(500).json({message:"Invalid"})
    }
}

const getAllOrders=async(req,res)=>{
    try {
        const oredr=await Oredr.findAll()
        if(!oredr){
            res.status(404).json({message:"Not Found orders"})
        }
        res.status(200).json({Orders:oredr})
    } catch (error) {
        res.status(500).json({message:"Invalid"})
    }
}

const getOrderById = async (req, res) => {
    const { id } = req.params
    try {
        const Order = await Oredr.findByPk(id)
        if (!Order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json({ Order })
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

const updateOrder = async (req, res) => {
    const { id } = req.params
    const { CustomerId, OrderDate, TotalAmount } = req.body
    try {
        const Order = await Oredr.findByPk(id)
        if (!Order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        if(CustomerId)  Order.CustomerId = CustomerId
        if(OrderDate)   Order.OrderDate = OrderDate
        if(TotalAmount) Order.TotalAmount = TotalAmount
        
        await Order.save()
        res.status(200).json({ message: "Order Updated Successfully", Orders: Order })
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params
    try {
        const Order = await Oredr.findByPk(id)
        if (!Order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        await Order.destroy();
    res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

module.exports={createOrder,getAllOrders,getOrderById,updateOrder,deleteOrder}
