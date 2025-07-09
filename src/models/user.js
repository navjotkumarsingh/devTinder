const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
    },
    lastName: {
        type: String
    },
    emailId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,  //Duplicate not allowed
        trim: true,
        //Validation of email is it correct format or not.
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email Address");
            }
        }
    },
    password: {
        type: String,
        required: true,
         //Validation of password is it strong or not.
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter an strong Password");
            }
        }
    },
    age: {
        type: Number,
        min: 18,
    },
    gender: {
        type: String,

        // Custom validation.
        validate(value){              
            if(!["male","female","Others"].includes(value)){
                throw new Error("Not valid");
            }
        }
    },
    photoUrl: {
        type: String,
    },
    about: {
        type: String,
        default: "This is the default about user",
    },
    skills: {
        type: [String],
    }
},{
    timestamps: true,
});

userSchema.methods.getJWT = async function(){
    const user = this;

    const token = await jwt.sign({ _id: user._id }, "DEV@TINDER$790", {expiresIn: "1h"});

    return token;
}

userSchema.methods.validatePassword = async function (passwordInputByUser) {
    const user = this;
    const passwordHash = user.password;
    const isPasswordValid = await bcrypt.compare(passwordInputByUser , passwordHash);

    return isPasswordValid;
}
module.exports = mongoose.model("User",userSchema);

// const User = mongoose.model("User",userSchema);

// module.exports = User;