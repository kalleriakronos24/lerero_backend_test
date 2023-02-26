import mongoose, { Schema } from "mongoose";


const CourseSchema = new mongoose.Schema({
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
    coverImage : {
        type : String,
        required: true
    },
    keyword : [{
        type : String,
        required: true
    }],
    learner : [{
        type : Schema.Types.ObjectId,
        ref : 'users'
    }],
    provider : {
        type : Schema.Types.ObjectId,
        ref : 'users'
    },
    start : {
        type : Date
    },
    finish : {
        type: Date
    },
    status : {
        type : String,
        default : 'ongoing'
    },
    courseModules : [{
        type : Schema.Types.ObjectId,
        ref : 'courseModules'
    }]
})


const Course = mongoose.model('courses', CourseSchema);

export default Course;