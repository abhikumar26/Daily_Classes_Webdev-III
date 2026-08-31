//http
const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if (req.url == ("/")){
        res.end("welcome to home page...!")
    } else if(req.url == "/about"){
        res.end("welcome to about page...!")
    } else if(req.url == "/login"){
        const data = fs.readFileSync("1.json","utf-8")
        res.end(data);
    } else {
        res.end("page not found")
    }
})
server.listen(8080,()=>{
    console.log("Server is ruuning on port 8080...!");
    
});