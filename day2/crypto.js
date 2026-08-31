// const crypto = require("crypto");

// // step-1 hash Algorithm
// const algo = crypto.createHash("shake256");
// const data = algo.update("Abhi");
// const ans = data.digest("hex")
// console.log(ans);

const { error } = require("console");
const fs = require("fs");

// //1. Read file--
// fs.readFile("./1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Something went wrong...!")
//     } else{
//         console.log(data,"Async-Sync sem...!");   
//     }
// })

// short hand--
// const syndata = fs.readFileSync("./1.txt","utf-8")
// console.log(syndata,"Sync-Sem");

// // Write operation--
// fs.writeFile("./1.txt","Hallo Shontono",(err)=>{
//     if(err){
//         console.log("Something went worng...!");
//     } else{
//         console.log("File updated successfully");
        
//     }
// })
// // short hand--
// const write = fs.writeFileSync("./1.txt","Welcome brooo")
// console.log(write);


// update operation--
// fs.appendFile("./1.txt","Shantsnu",(err)=>{
//     if (err){
//         console.log("Some went wrong");
//         }else{
//             console.log("file appended");
//     }
// })
// Update operation--
// const upda = fs.rename("./1.txt","new.txt",(error)=>{
//     if(error){
//         console.log("Something is off...!");
//     } else{
//         console.log('renamed...successfully');
        
//     }
// })

// // shorthand--
// const rename = fs.renameSync("./1.txt","new.txt")
// console.log("rename");

// Delete Operation--
fs.unlink("./new.txt",(error)=>{
    if(error){
        console.log("not deleted");
    } else{
        console.log("Deleted successfully...!");
        
    }
})




