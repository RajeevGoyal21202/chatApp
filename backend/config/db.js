const mongoose = require("mongoose");

module.exports.connectDb = async()=>{
    try{

        const conn = await mongoose.connect(process.env.MONGO_DB_URL);
        console.log( `Connection establish sucessfully ${conn.connection.host}`)
        return `Connection establish sucessfully${conn.connection.host}`
    }
    catch(error){
        console.error(error);
        process.exit(1);

    }
    
}