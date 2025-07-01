//Use nodemon for automatic refresh server --use:-- "nodemon app.js "

const express = require('express');

const app = express();

// Request Handler
app.use("/test",(req,res)=>{
    res.send("Hello from the test section");
})

app.use("/hello",(req,res)=>{
    res.send("Hello from the hello section");
})
app.use((req,res)=>{
    res.send("Hello from the server");
})

app.listen(3000, ()=>{
    console.log("Server is sucessfully listenining on port 3000");
});

