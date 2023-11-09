const mongoose=require("mongoose");

const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected");
    })
    .catch((error)=>{
        console.log("Error in Database");
        console.log(error);
        process.exit(1);
    })
}

module.exports=dbconnect;