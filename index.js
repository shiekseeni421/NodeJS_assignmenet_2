const express = require("express");
const app = express();
const port = 8085;
const productRoutes=require("./sampleProducts");
const userRoutes=require("./sampleUser");
app.use(express.json())



const isAdmin=false;

app.use((req,res,next) => {
    if(isAdmin==true){
        next();
    }else{ res.status(404).json({message:"if an API is being called which has not been created"})}
});


const isAdminMiddleware=(req,res,next)=>{
    if(isAdmin==true){
        next();
    }
    else{
        res.status(404).json({message:"if an API is being called which has not been created"})
    }
}




app.get("/" ,isAdminMiddleware ,(req,res)=>{
    res.send("home page")
});

app.use(productRoutes);
app.use(userRoutes);





app.use( "*" , (req,res) => {
res.status(404).send("404 not found")
} )


app.listen(port , () => {
    console.log(`server starting running on port ${port}`)
}   )