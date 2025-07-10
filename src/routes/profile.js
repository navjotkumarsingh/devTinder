const express = require('express');
const profileRouter = express.Router();

const { userAuth } = require("../middlewares/auth");

profileRouter.get("/profile", userAuth, async(req,res)=>{
try{
    // const cookies = req.cookies;
    // const { token } = cookies;
    // if(!token){
    //     throw new Error("Invalid token");
    // }
    //Validate the token
    // const decodedMessage = await jwt.verify(token, "DEV@TINDER$790");
   // console.log(decodedMessage);

    // const { _id } = decodedMessage;
    // console.log("Loged in user is: "+ _id);
    
    // const user = await User.findById(_id);
    const user = req.user;
    // if(!user){
    //     throw new Error("Invalid request");
    // }
    res.send(user);
}
catch(err){
    res.status(400).send("ERROR: "+err.message);
}
    // console.log(cookies);
    res.send("Reading Cookie!");
});

module.exports=profileRouter;