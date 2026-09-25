// Step-1 import--
const mongoose = require("mongoose")

// Step-4
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
}, {
    versionKey: false,
}
);

const userModel = mongoose.model("user", userSchema);

const main = async () => {
    // step-2 Built connection with mongodb
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/")
    console.log("DB connected")
    userModel.insertOne({
        name: "Prithvi",
        email: "radheybiotech@gmail.com",
        age: 19,
        password: "xyz"
    })
    await userModel.insertOne({
        name: "manav",
        email: "radheybiotech@gmail.com",
        age: 19,
        password: "xyz"
    });
    // Step - 3 disconnect
    // mongoose.disconnect();
    // console.log("DB Disconnect");
};
main();
