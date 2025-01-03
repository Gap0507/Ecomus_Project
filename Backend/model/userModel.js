import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{
        type:String,
        unique:[true, "User already exists!!"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
})
const userModel = mongoose.model("User", userSchema)

export default userModel