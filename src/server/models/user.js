import mongoose, { Schema } from "mongoose";


const UserSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId()
    },
    name : {
        type : String,
        required: true
    },
    username : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    userRole : {
        type : String,
        required: true
    }
})


const User = mongoose.model('users', UserSchema);

export default User;