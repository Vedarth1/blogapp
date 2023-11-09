const express=require("express");
const router = express.Router();

const {getblog}=require("../controllers/getblog");
const {createblog}=require("../controllers/createblog");
const {likeblog}=require("../controllers/likeblog");


router.get("/getblog",getblog);
router.post("/createblog",createblog);
router.put("/likeblog/:id",likeblog);

module.exports=router;