const mongoose = require('mongoose');

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
    },
    password: {
        type: String,
        required: true,
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

module.exports = mongoose.model("User",userSchema);

// const User = mongoose.model("User",userSchema);

// module.exports = User;