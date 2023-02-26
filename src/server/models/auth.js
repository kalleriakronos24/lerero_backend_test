import mongoose, { Schema } from "mongoose";


const AuthSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId()
    },
    user : {
        type : Schema.Types.ObjectId,
        ref: 'users'
    },
    token : {
        type : String,
        required : true
    },
    loginAt : {
        type : Date,
        default: new Date()
    },
})


const Auth = mongoose.model('users_authentication', AuthSchema);

export default Auth;