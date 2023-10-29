require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const router = require('./router/product');
const connectDB = require('./db/connect');

app.use('/api/v1/',router);
app.get('/',(req,res)=>{
    //console.log("I have been called");
    res.send("I am here now!")
});
const start = async()=>{
    try{
        //console.log(process.env.MONGO_URL);
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT,()=>{console.log("Server connected successfully!")});
}
    catch (error){
        console.log(error);
}};
start();