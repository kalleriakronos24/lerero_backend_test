import mongoose, { Schema } from "mongoose";


const CourseActivitySchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId,
        default : mongoose.Types.ObjectId()
    },
    date : {
        type : Date,
        default : new Date()
    },
    activity : {
        type : Schema.Types.ObjectId,
        ref : 'activities'
    },
    provider : {
        type : Schema.Types.ObjectId,
        ref : 'users'
    }
})


const CourseActivity = mongoose.model('courseActivities', CourseActivitySchema);

export default CourseActivity;