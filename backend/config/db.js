const mongoose = require("mongoose");

exports.connectDB = async() =>{
    try{
        mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex : true,
            useUnifiedTopology : true,
            useNewUrlParser : true
        });
        console.log(`Mongoose connected successfully`.yellow);
    }catch(error){
        console.error(`Error : ${error.message}`.red);
        process.exit(1);
    }
}