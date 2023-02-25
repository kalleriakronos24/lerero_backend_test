import mongoose, { Schema } from "mongoose";


const ActivitySchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId()
    },
    name : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    fileUrl : {
        type : String,
        required: true
    },
    fileExt : {
        type : String,
        required: true
    },
})

const Activity = mongoose.model('activities', ActivitySchema);

export default Activity;
