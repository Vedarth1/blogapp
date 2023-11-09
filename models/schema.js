const mongoose=require("mongoose");

const blogschema=new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
            maxLength:50,
        },
        blog:{
            type:String,
            require:true,
            maxLength:100,
        },
        like:{
            type:Boolean,
            require:true,
        },
        comment:{
            type:String,
            require:true,
            maxLength:20,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            require:true,
            default:Date.now(),
        }
    }
);

module.exports=mongoose.model("Blog",blogschema);