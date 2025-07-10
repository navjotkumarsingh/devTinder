const express = require('express');
const profileRouter = express.Router();
const { validateEditProfileData } = require("../utils/validation");
const { userAuth } = require("../middlewares/auth");

profileRouter.get("/profile/view", userAuth, async(req,res)=>{
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

profileRouter.patch("/profile/edit", userAuth, async (req,res)=>{
    try {
        if(!validateEditProfileData(req)){
            throw new Error("Invalid Edit Request");
        }
        const loggedInUser = req.user;
        
        Object.keys(req.body).forEach((key) =>(loggedInUser[key]=req.body[key]));
        await loggedInUser.save();
        // res.send("Profile Updated Sucessfully!");
        res.json({
            message: `${loggedInUser.firstname}, your profile updated sucessfully`,
            data: loggedInUser,
        });

    } catch (err) {
        res.status(400).send("ERROR: "+err.message);
    }
});
module.exports=profileRouter;