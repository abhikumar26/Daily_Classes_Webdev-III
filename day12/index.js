// Step-1 import--
const mongoose = require("mongoose")

const main =  async() =>{
    // step-2 Built connection with mongodb
    const connection  = await mongoose.connect("mongodb://127.0.0.1:27017/")
    console.log("DB connected")
    // Step - 3 disconnect
    mongoose.disconnect();
    console.log("DB Disconnect");
};
main();
