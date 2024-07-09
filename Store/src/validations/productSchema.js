
const Joi = require('joi');

const productSchema = Joi.object({
    Name: Joi.string().min(1).trim().required().messages({
        'string.empty': 'Name cannot be empty',
    }),
    Description: Joi.string().min(1).trim().required().messages({
        'string.empty': 'Description cannot be empty',
    }),
    Price: Joi.number().min(0).required().messages({
        'number.min': 'Price cannot be negative',
    }),
    Stock: Joi.number().min(0).required().messages({
        'number.min': 'Stock cannot be negative',
    }),
});

const editProductSchema=Joi.object({
    Name:Joi.string().trim().optional(),
    Description:Joi.string().max(3000).trim().optional(),
    Price: Joi.string().trim().optional(),
    Stock:Joi.string().optional()
})
module.exports = { productSchema,editProductSchema };
