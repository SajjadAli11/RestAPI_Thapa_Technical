const mongoose = require('mongoose');

//uri = "mongodb+srv://sajjadsa00:Dajjassa00@cluster0.ncf7dl9.mongodb.net/cluster0?retryWrites=true&w=majority";
const connectDB = (uri)=>{
    console.log("connect with my DB");
    return mongoose.connect(uri,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        writeConcern: {
            w: 'majority',
            wtimeout: 0,
          }
    });
};
module.exports = connectDB;