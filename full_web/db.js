// Step-1 importing module--
const mongoose = require("mongoose")

// step-2 mongoose.Connection building--
const connection = mongoose.connect("mongodb://127.0.0.1:27017/spiderman")

// step-3 Making Structure--
const userSchema = new mongoose.Schema({
    name:String,
    age:Number
})
const userModel = mongoose.model("user",userSchema);

module.exports = {connection,userModel};