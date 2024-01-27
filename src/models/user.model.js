import mongoose  , { Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,

  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowecase: true,
    trim: true, 
},
 Name: {
    type: String,
    required: true,
     
    
}
,
password: {
    type: String,
    required: [true, 'Password is required']
},
avtar: {
    type: String, // cloudinary url
    required: true,
}


},
{
    timestamps:true
}
)
userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
let User;


try {
    // Attempt to retrieve the existing model
    User = mongoose.model("User")
  } catch (e) {
    User = mongoose.model("User", userSchema)
  }
  export {User};