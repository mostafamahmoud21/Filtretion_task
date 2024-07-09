const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController.js')
const validation = require('../middlewares/Validation.js')
const { productSchema, editProductSchema } = require('../validations/productSchema.js')

productRouter.get('/', productController.getAllProducts)
productRouter.get('/:id', productController.getProductById)
productRouter.post('/', validation(productSchema), productController.addNewProduct)
productRouter.put('/:id', validation(editProductSchema),productController.updateProduct)
productRouter.delete('/:id', productController.deleteProduct)

module.exports = productRouter