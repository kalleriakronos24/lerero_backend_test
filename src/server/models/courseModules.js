import mongoose, { Schema } from "mongoose";


const CourseModuleSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId()
    },
    date : {
        type : Date,
        default : new Date()
    },
    provider : {
        type : Schema.Types.ObjectId,
        ref : 'users'
    },
    module : {
        type : Schema.Types.ObjectId,
        ref : 'modules'
    },
    status : {
        type : String,
        default : 'ongoing'
    },
    activities : [{
        type : Schema.Types.ObjectId,
        ref : 'courseActivities'
    }]
})


const CourseModule = mongoose.model('courseModules', CourseModuleSchema);

export default CourseModule;