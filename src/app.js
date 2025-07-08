//Use nodemon for automatic refresh server --use:-- "nodemon app.js "
const express = require('express');
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validate");
const bcrypt = require("bcrypt");
app.use(express.json());

//Signup API
app.post("/signup", async (req,res) => {
    try{
    //Validation of data
    validateSignUpData(req);

    const {firstName,lastName,emailId,password} = req.body;
    //Encrypt the password
    const passwordHash = await bcrypt.hash(password,10);
    console.log(passwordHash);

    // console.log(req.body);
    //This is for dynamic data

    //Creating a new instance of user model.
    const user = new User({
        firstName,
        lastName,
        emailId,
        password: passwordHash,
    })
    // This is for static data
    // const user = new User({
    //     firstName: "Navjot",
    //     lastName: "singh",
    //     emailId: "navjot@gmail.com",
    //     password: "navjot@123"
    // })
    
    await user.save(); // This function return a promise.
    res.send("User added Sucessfully");
    }catch (err){
        res.status(400).send("ERROR : "+err.message)
    }
    // Creating the new intance of the user model
    // const user = new User(userObj);
});
 
//Get user by Email
app.get("/users", async (req, res) => {

    const userEmail = req.body.emailId;

    try {
        const user = await User.find({ emailId: userEmail });
        if(user.length===0){
            res.status(404).send("User not found");
        }
        else{
            res.send(user);
        }
        
    } catch (err) {
        res.status(400).send("Error fetching user...");
    }

});

//Feed API
app.get("/feed",async (req,res)=>{

    try {
        const users = await User.find();
        res.send(users);
        
    } catch (err) {
        res.status(400).send("Error fetching user...");
    }
});

// Delete user API.
app.delete("/user",async (req,res)=>{
    const userId = req.body.userId;
    try {
        // const user = await User.findByIdAndDelete({_id: userId});
        const user = await User.findByIdAndDelete(userId);
        res.send("user deleted Sucessfully");
    } catch (err) {
        res.status(400).send("Error fetching user...");
    } 
});

//Update data API
app.patch("/user/:userId",async (req,res)=>{
    // const userId = req.body.userId;
    const userId = req.params?.userId;
    const data = req.body;
    
    try {
        //API level Validation.
        const ALLOWED_UPDATES = [
         "photourl", "about","gender","age","skills"
        ];

        const isUpdateAllowed = Object.keys(data).every(k => 
            ALLOWED_UPDATES.includes(k)
        );
        if(data.skills.length >10){
            throw new Error("Skills limit reached out!");
            
        }
        if(!isUpdateAllowed){
            throw new Error("Update not allowed");
        }
        await User.findByIdAndUpdate({_id: userId}, data);
        res.send("Updated sucessfull!");
        runValidators: true;
    } catch (err) {
        res.status(400).send("Error fetching user...");
    }
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