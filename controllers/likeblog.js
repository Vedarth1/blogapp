const Blog=require("../models/schema");

exports.likeblog=async (req,res)=>{
    try{
        //processing update
        const {id}=req.params;
        const {like,comment}=req.body;

        const x=await Blog.findByIdAndUpdate(
            {_id:id},
            {like,comment,updateAt: Date.now()}
        )
        res.status(200)
            .json({
                success:true,
                data:x,
                message:"update successfully",
            });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            error:err.message,
        });
    }
}