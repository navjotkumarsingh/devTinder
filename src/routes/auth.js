const express = require('express');
const authRouter = express.Router();

const { validateSignUpData } = require("../utils/validation");
const User = require("../models/user");
const bcrypt = require('bcrypt');


authRouter.post("/signup", async (req,res) => {

    try{
    //Validate the data
    validateSignUpData(req);


    const {firstName,lastName,emailId,password} = req.body;
    //Encrypt the password
    const passwordHash = await bcrypt.hash(password,10);
    // console.log(passwordHash)
    //Store the data

    // console.log(req.body);
      
    //This is for dynamic data

    //Creating a new instance of user model.
    // const user = new User(req.body)
    const user = new User({
        firstName,
         lastName,
         emailId,
         password: passwordHash
    });



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
        res.status(400).send("ERROR! "+err.message);
    }
    // Creating the new intance of the user model
    // const user = new User(userObj);
});

authRouter.post("/login",async (req,res)=>{
    try {
        const {emailId, password} = req.body;
        const user = await User.findOne({emailId: emailId});
        if(!user){
            //Never give this message this lead to data leakage
            //throw new Error("Not registered Email Id");
            //Use this
            throw new Error("Invalid Credential");
        }
        const isPasswordValid = await user.validatePassword(password);
        if(isPasswordValid){
            
            //Create a JWT Token
            const token = await user.getJWT();
            console.log(token);
            //Add the token to cookies and send the responce to user
            res.cookie("token", token, {
                expires: new Date(Date.now() + 8*3600000),
            });
            res.send("Login Sucessful!!!");
        }else{
            throw new Error("Invalid Password");   
        }
    } catch (error) {
        res.status(400).send("ERROR: "+error.message);
    }
});

authRouter.post("/logout", async (req,res)=> {
    res.cookie("token",null,{
        expires: new Date(Date.now()),
    });
    res.send("Logout Sucessful!");
});

module.exports = authRouter;