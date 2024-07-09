const Product = require('../database/models/Products.js')

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

const addNewProduct = async (req, res) => {
    const { Name, Description, Price, Stock } = req.body
    try {
        const product = await Product.create({ Name, Description, Price, Stock })
        res.status(200).json({ message: "Product Added Successfully", NewProduct: product })
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params
    const { Name, Description, Price, Stock } = req.body
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        if(Name)product.Name = Name
        if(Description) product.Description = Description
        if(Price) product.Price = Price
        if(Stock) product.Stock = Stock
        await product.save()
        res.status(200).json({ message: "Product Updated Successfully", Product: product })
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.destroy();
    res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: "Invalid" })
    }
}

module.exports={addNewProduct,getAllProducts,getProductById,updateProduct,deleteProduct}