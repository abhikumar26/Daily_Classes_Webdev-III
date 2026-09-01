// Step 1: Import express
const express = require('express');

// Step 2: Create an app instance
const app = express();
const PORT = 3000; // you can change the port


//Middleware--1
const middleware1 = ((req,res,next)=>{
    console.log(1);
    next()
    console.log(2);
})
//Middleware--2
const middleware2 = ((req,res,next)=>{
    console.log(3);
    next()
    console.log(4);
})

app.use(middleware1)
app.use(middleware2)

// Step 3: Define the home route
app.get('/', (req, res) => {
    console.log("Home-page");
    
  res.send('Welcome to the Home Page!');
});

// Step 4: Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
