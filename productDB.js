require("dotenv").config();
const connectDB = require('./db/connect');
const Product = require('./model/product');
const ProductJson = require('./products.json');

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        await Product.deleteMany(); // to delete past data.
        await Product.create(ProductJson);
        console.log("success");
    }
    catch(error)
    {
        console.log(error);
    }
}

start();