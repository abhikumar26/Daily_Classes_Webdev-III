// step-1 import express.js
const express = require("express");
// step-2 create an application through express.js--
const app = express();
const fs = require("fs");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("web-Page")
})
app.get("/home",(req,res)=>{
    const data = fs.readFileSync("./1.json","utf-8");
    console.log(data,typeof data);
    
    //converting json data --- parse ---? js object
    const jsData = JSON.parse(data);
    console.log(jsData,typeof jsData);
    
    res.send({msg:jsData})
})

app.post("/create",(req,res)=>{
    const payload = req.body;
    console.log(payload);

    const data = JSON.parse(fs.readFileSync("./1.json","utf-8"));
    const stdata = data.student;
    console.log(stdata);
    stdata.push(payload);
    console.log(stdata);

    data.student = stdata;

    fs.writeFileSync("./1.json", JSON.stringify(data, null, 2));
    res.send({ msg: "New student created successfully...!" });
});

app.post("/update/:id",(req,res)=>{
    const payload = req.body;
    console.log(payload);

    const { id } = req.params;
    console.log(id);

    const data = JSON.parse(fs.readFileSync("./1.json","utf-8"));

    const stdata = data.student;
    console.log(stdata);
    stdata.push(stdata)

    const updatedData = stdata.map((el)=>{
        if (String(el.id) === String(id)) {
            return { ...el, ...payload };
        }
        return el;
    });

    console.log(updatedData);
    data.student = updatedData;
    fs.writeFileSync("./1.json", JSON.stringify(data, null, 2));
    res.send({ msg: "Student updated successfully...!" });
});
app.listen(PORT,()=>{
    console.log(`App is running on port ${PORT}`);
})
