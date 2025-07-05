//Use nodemon for automatic refresh server --use:-- "nodemon app.js "
const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req,res)=>{
    // console.log(req.body);

    //This is for dynamic data

    //Creating a new instance of user model.
    const user = new User(req.body)


    // This is for static data
    // const user = new User({
        
    //     firstName: "Navjot",
    //     lastName: "singh",
    //     emailId: "navjot@gmail.com",
    //     password: "navjot@123"
    // })

    try{
    await user.save(); // This function return a promise.
    res.send("User added Sucessfully");
    }catch (err){
        res.status(400).send("Error Saving the user..."+err.message)
    }
    // Creating the new intance of the user model
    // const user = new User(userObj);
});

connectDB()
.then(() => {
    console.log("Database connection establish");
    app.listen(7777, ()=>{
    console.log("Server is sucessfully listenining on port 7777");
}); 
})
.catch(err=>{
    console.log("Database can't be connected");
})


