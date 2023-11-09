const express=require('express');
const app=express();

require("dotenv").config();
const PORT = process.env.PORT||4000;

app.use(express.json());
const blogroutes=require("./routes/blog");
app.use("/api",blogroutes);

app.listen(PORT,()=>{
    console.log("Server Started at port no. 4000");
})

app.get("/",(req,res)=>{
    res.send(`<h1>welcome to blog app</h1>`);
})

const db=require("./database/db");
db();