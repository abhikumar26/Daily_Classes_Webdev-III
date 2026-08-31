// Node js core module

//1. os - operating system

//import os from "os"

// common js method fotr import package

// const os = require("os");

// console.log(os.freemem());

// console.log(os.platform());

// console.log(os.version());

// console.log(os.cpus());

// // 2. dns - domain name system
// const dns = require("dns");
// console.log(dns.getServers());

// //3. path - ADDRESS
// const path = require("path");
// console.log(path.resolve());

// 4. Crypto--
const crypto = require("crypto");
console.log(crypto.randomUUID());
console.log(crypto.randomInt(1,7));
var name =  "prithvi";

const hashvalue = crypto.createHash("sha123");
console.log(hashvalue);

const newValue = hashvalue.update(name);
console.log(hashValue);

const ans = newValue.digest("hex");
console.log(ans);