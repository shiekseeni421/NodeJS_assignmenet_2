const express=require("express");
const userRouter=express.Router();

const isAdmin=true;



userRouter.get("/sampleUser/getdata",(req,res)=>{
    res.json([ {user1 : "Mubarak"} , {  user2 : "Sheik" }   ] )})


module.exports=userRouter