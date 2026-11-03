const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    res.send({msg:"Welcome to note application"})
});

app.listen(3000,async()=>{
    try{
        await connection;
        console.log("DB connected");
    } catch (err){
        console.log(`Server is running at port 3000`);
        
    }
})