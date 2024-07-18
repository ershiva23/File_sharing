require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async()=> {
    try{
        const connect = await mongoose.connect(process.env.SECRET_KEY);
        console.log("Database is connected: ",connect.connection.host,connect.connection.name);

    }catch(err){
        console.log(err);
        process.exit(1);

    }
};

module.exports=connectDB