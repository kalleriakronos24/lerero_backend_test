import { ObjectId } from "bson";
import mongoose, { Schema } from "mongoose";


const ModuleSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId()
    },
    name : {
        type : String,
        required: true
    }
})


const Module = mongoose.model('modules', ModuleSchema);

export default Module;
