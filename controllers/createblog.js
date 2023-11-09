const Blog=require("../models/schema");

exports.createblog=async (req,res)=>{
    try{
        const {title,blog}=req.body;
        const like=true;
        const comment="";
        const response=await Blog.create({title,blog,like,comment});

        res.status(200).json({
            success:true,
            data:response,
            message:'Blog Created Successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message: err.message,
        })
    }
}