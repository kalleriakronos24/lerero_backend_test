import Activity from "./activity";
import Auth from "./auth";
import Course from "./course";
import CourseActivity from "./courseActivity";
import CourseModule from "./courseModules";
import Module from "./module";
import User from "./user";

class Models {
    user() {
        return User;
    }

    course() {
        return Course;
    }

    activity() {
        return Activity
    };

    module() {
        return Module
    }

    courseModule() {
        return CourseModule
    }

    courseActivity() {
        return CourseActivity
    }

    auth() {
        return Auth;
    }
}

export default Models;