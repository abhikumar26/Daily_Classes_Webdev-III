const express = require("express");
const app = require();
const fs = require("fs")

app.get("/",(req,res)=>{
    res.send("Home-Page")
});

app.get("/read",(req,res)=>{
    const data = JSON.parse(FileSystem.r)
})