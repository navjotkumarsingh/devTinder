//Use nodemon for automatic refresh server --use:-- "nodemon app.js "
const express = require('express');
const connectDB = require("./config/database");
const app = express();


connectDB().then(() => {
    console.log("Database connection establish");
    app.listen(7777, ()=>{
    console.log("Server is sucessfully listenining on port 7777");
}); 
})
.catch(err=>{
    console.log("Database can't be connected");
})


