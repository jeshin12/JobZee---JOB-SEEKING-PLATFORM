import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please provied your name'],
        minlength:[3,"Name must contain atleast 3 character"],
        maxlength:[30,"Name cannot exceed 30 character"],

    },
    email:{
        type:String,
        required:[true,"please provied your Email"],
        validate:[validator.isEmail,"Please provied a valid Email"]
    },
    phone:{
        type:Number,
        required:[true,"please provied your phone number"]
    },
    password:{
        type:String,
        required:[true,"please provied your password"],
        minlength:[5,"pasword must contain atleast 5 character"],
        maxlength:[30,"password cannot exceed 30 character"],
        select:false
    },
    role:{
        type:String,
        required:[true,"please provied your role"],
        enum:["job seeker","Employer"]

    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

//Hashing the password

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10 );
})

//COMPARING PASSWORD

userSchema.methods.comparePassword= async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

//GENERATING A JWT TOKEN WHEN A USER REGISTERS OR LOGINS, IT DEPENDS ON OUR CODE THAT WHEN DO WE NEED TO GENERATE THE JWT TOKEN WHEN THE USER LOGIN OR REGISTER OR FOR BOTH. 
userSchema.methods.getJWTToken = function () {
    const expiresIn = process.env.JWT_EXPIRES || '1d';

    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {expiresIn});
  };
  
  export const User = mongoose.model("User", userSchema);