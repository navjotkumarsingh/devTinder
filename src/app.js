//Use nodemon for automatic refresh server --use:-- "nodemon app.js "

const express = require('express');

const app = express();

// Request Handler
// app.use("/",(req,res)=>{     // "/" this will handle all the handler that start with / at first index.
//     res.send("Hello from the main section");
// })
// app.use((req,res)=>{
//     res.send("Hello from the main section");
// })
// app.use("/hello",(req,res)=>{
//     res.send("Hello from the hello section");
// })


// This will only match GET call to "/user".
// app.get("/user",(req,res) => {
//     res.send({firstname: "Navjot", lastname: "Singh"})
// })

// app.post("/user",(req,res)=>{
//     //Saving data to db
//     res.send("Data is sucessefully saved to database");
// })


// app.delete("/user",(req,res)=>{
//     res.send("Data is deleted sucessfully");
// })


// // This will match all the HTTP method API call to the "/test"
// app.use("test",(req,res)=>{
//     res.send("Hello from the test section");
// })

//Regular routing expression

// It will work for "abc" and "ac" both 

// app.get("/ab?c",(req,res)=>{
//     res.send("Hello worls=d!");
// })



// app.get("/ab+c",(req,res)=>{
//     res.send("Hello worls=d!");
// })


// app.get("/ab*cd",(req,res)=>{
//     res.send("Hello worls=d!");
// })


//Regix:-- any of the part contain this regix this will route.
// app.get(/a/,(req,res)=>{
//     res.send("Hello world!");
// })

// app.get(/.*fly$/,(req,res)=>{
//     res.send("Hello world!");
// })


app.get("/user/:userid/:name/:password",(req,res)=>{
    // console.log(req.query);
    console.log(req.params);
    
    res.send({firstname: "Navjot", lastname: "Singh"});
})

app.listen(3000, ()=>{
    console.log("Server is sucessfully listenining on port 3000");
});

