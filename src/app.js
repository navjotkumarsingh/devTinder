//Use nodemon for automatic refresh server --use:-- "nodemon app.js "
const express = require('express');
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");


app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);






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











// **************************** CODE BEFORE ROUTER API **********************************

// const User = require("./models/user");
// const { validateSignUpData } = require("./utils/validation");
// const bcrypt = require('bcrypt');
// const jwt = require("jsonwebtoken");
// const { userAuth } = require("./middlewares/auth");

//  ******** Signup API      ********
// app.post("/signup", async (req,res) => {

//     try{
//     //Validate the data
//     validateSignUpData(req);


//     const {firstName,lastName,emailId,password} = req.body;
//     //Encrypt the password
//     const passwordHash = await bcrypt.hash(password,10);
//     console.log(passwordHash)
//     //Store the data

//     // console.log(req.body);
      
//     //This is for dynamic data

//     //Creating a new instance of user model.
//     // const user = new User(req.body)
//     const user = new User({
//         firstName,
//          lastName,
//          emailId,
//          password: passwordHash
//     });



//     // This is for static data
//     // const user = new User({
        
//     //     firstName: "Navjot",
//     //     lastName: "singh",
//     //     emailId: "navjot@gmail.com",
//     //     password: "navjot@123"
//     // })

//     await user.save(); // This function return a promise.
//     res.send("User added Sucessfully");
//     }catch (err){
//         res.status(400).send("ERROR! "+err.message);
//     }
//     // Creating the new intance of the user model
//     // const user = new User(userObj);
// });
 
// ********* LOGIN API ***************
// app.post("/login",async (req,res)=>{
//     try {
//         const {emailId, password} = req.body;
//         const user = await User.findOne({emailId: emailId});
//         if(!user){
//             //Never give this message this lead to data leakage
//             //throw new Error("Not registered Email Id");
//             //Use this
//             throw new Error("Invalid Credential");
//         }
//         const isPasswordValid = await user.validatePassword(password);
//         if(isPasswordValid){
            
//             //Create a JWT Token
//             const token = await user.getJWT();
//             console.log(token);
//             //Add the token to cookies and send the responce to user
//             res.cookie("token", token, {
//                 expires: new Date(Date.now() + 8*3600000),
//             });
//             res.send("Login Sucessful!!!");
//         }else{
//             throw new Error("Invalid Password");   
//         }
//     } catch (error) {
//         res.status(400).send("ERROR: "+error.message);
//     }
// });

// PROFILE API
// app.get("/profile", userAuth, async(req,res)=>{
// try{
//     // const cookies = req.cookies;
//     // const { token } = cookies;
//     // if(!token){
//     //     throw new Error("Invalid token");
//     // }
//     //Validate the token
//     // const decodedMessage = await jwt.verify(token, "DEV@TINDER$790");
//    // console.log(decodedMessage);

//     // const { _id } = decodedMessage;
//     // console.log("Loged in user is: "+ _id);
    
//     // const user = await User.findById(_id);
//     const user = req.user;
//     // if(!user){
//     //     throw new Error("Invalid request");
//     // }
//     res.send(user);
// }
// catch(err){
//     res.status(400).send("ERROR: "+err.message);
// }
//     // console.log(cookies);
//     res.send("Reading Cookie!");
// });

//********** Connection Request API 
// app.post("/sendConnectionRequest", userAuth, async (req,res)=>{
//     const user = req.user;
//     //Sending connection request
//     console.log("Sending a connnection request");
    
//     res.send(user.firstName + " sent connection request!");
// });

//.  ********** RANDOM API ****************** 

// //Get user by Email
// app.get("/users", async (req, res) => {

//     const userEmail = req.body.emailId;

//     try {
//         const user = await User.find({ emailId: userEmail });
//         if(user.length===0){
//             res.status(404).send("User not found");
//         }
//         else{
//             res.send(user);
//         }
        
//     } catch (err) {
//         res.status(400).send("Error fetching user...");
//     }

// });

// //Feed API
// app.get("/feed",async (req,res)=>{

//     try {
//         const users = await User.find();
//         res.send(users);
        
//     } catch (err) {
//         res.status(400).send("Error fetching user...");
//     }
// });

// // Delete user API.
// app.delete("/user",async (req,res)=>{
//     const userId = req.body.userId;
//     try {
//         // const user = await User.findByIdAndDelete({_id: userId});
//         const user = await User.findByIdAndDelete(userId);
//         res.send("user deleted Sucessfully");
//     } catch (err) {
//         res.status(400).send("Error fetching user...");
//     } 
// });

// //Update data API
// app.patch("/user/:userId",async (req,res)=>{
//     // const userId = req.body.userId;
//     const userId = req.params?.userId;
//     const data = req.body;
    
//     try {
//         //API level Validation.
//         const ALLOWED_UPDATES = [
//          "photourl", "about","gender","age","skills"
//         ];

//         const isUpdateAllowed = Object.keys(data).every(k => 
//             ALLOWED_UPDATES.includes(k)
//         );
//         if(data.skills.length >10){
//             throw new Error("Skills limit reached out!");
            
//         }
//         if(!isUpdateAllowed){
//             throw new Error("Update not allowed");
//         }
//         await User.findByIdAndUpdate({_id: userId}, data);
//         res.send("Updated sucessfull!");
//         runValidators: true;
//     } catch (err) {
//         res.status(400).send("Error fetching user...");
//     }
// });
