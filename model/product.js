const mongoose = require('mongoose');

const prodcutScheme = new mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true,
        },
        price: 
        {
            type: Number,
            required: true,
        },
        feature: 
        {
            type: Boolean,
            default: false,
        },
        rating: 
        {
            type: Number,
            default: 4.9,
        },
        createdAt: 
        {
            type: Date,
            default: Date.now(),
        },
        company: 
        {
            type: String,
            enum: {
            values: ["apple1","apple2","apple3"],
            message: `{value} is not supported`,    
        }
        },
    });

module.exports = mongoose.model("Product",prodcutScheme);