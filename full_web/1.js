// Step-1 importing module--
const express = require("express")
const {connection,userModel} = require("./db")

// step-2 building application via express--
const app = express();

// Step-3 Making Api--
// Api--
app.get("/",(req,res)=>{
    res.send({msg:"Welcome to my application"})
})
//GET ROUTE:for reading all documents
app.get("/read",async(req,res)=>{
    const id = req.params.id;
    try{
        const user = await userModel.findById({_id:id})
        res.send(user)
    } catch(error){
        res.send({msg:"Something went wrong"})
    }
})

//post Route: for creating route
app.post("/create",async(req,res)=>{
    try {
        const newUser = new userModel(payload)
        await newUser.save();
        res.send({msg:"New user Successsfully"})
    } catch (error) {
        res.send({msg:"New user Successsfully"})
        
    }
})
// Step3- Making Port--
app.listen(8080,async ()=>{
    try{
        await connection;
        console.log("Db-connected"); 
    } catch (error){
        console.log(error);
    }
    console.log("Server started");
    
})