const Blog=require("../models/schema");

exports.getblog=async (req,res)=>{
    try{
        const blogs=await Blog.find({});

        res.status(200)
        .json({
            success:true,
            data:blogs,
            message:"This are the blogs posted recently",
        });
    }
    catch(error){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            error:err.message,
        });
    }
}