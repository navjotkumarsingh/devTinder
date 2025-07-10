const validator = require('validator');

const validateSignUpData = (req) => {

    const {firstName,lastName,emailId,password} = req.body;
    
    if(!firstName || !lastName){
        throw new Error("Name is not valid");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Invalid EmailId!");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Invalid Password!");
    }
};

const validateEditProfileData = (req)=>{
    const allowedEditFileds = ["firstName", "lastName", "emailId", "gender", "about", "age", "skills"];

    const isEditAllowed = Object.keys(req.body).every(field=> allowedEditFileds.includes(field));

    return isEditAllowed;
};

module.exports = {
    validateSignUpData,
    validateEditProfileData,
}