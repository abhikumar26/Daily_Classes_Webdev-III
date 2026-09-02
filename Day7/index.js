const express = require("express");
const fs = require("fs");
const app = express();
const port = 4000;

// Middleware-1
const timeloggerMiddleware = (req,res,next)=>{
    const startTime = Date.now();
    next();
    const endTime = Date.now();
    console.log(`Time Taken by routes is : ${endTime - startTime}ms`);
}
// Middleware-2...
app.use(timeloggerMiddleware)

app.get("/Home",(req,res)=>{
    res.send("Home-Page")
})
app.get("/About",(req,res)=>{
    res.send("About-Page")
})
app.get("/read",(req,res)=>{
    const data = fs.readFileSync("./1.json","utf-8")
    res.send(data)
})
app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
})