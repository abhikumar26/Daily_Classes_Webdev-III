const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send({msg: "Welcome to my node application"})
})

app.listen(8080, () => {
    console.log("Server Started");
})