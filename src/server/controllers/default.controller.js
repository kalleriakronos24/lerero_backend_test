import ActivityController from './activity.controller';
import AuthController from './auth.controller';
import CourseActivityController from './course-activity.controller';
import CourseModuleController from './course-module.controller';
import CourseController from './course.controller';
import ModuleController from './module.controller';

class Controller {

    /**
     * Authentication Controller
     */
    authController() {
        return new AuthController();
    }

    moduleController() {
        return new ModuleController();
    }

    activityController(){
        return new ActivityController()
    }

    courseController(){
        return new CourseController();
    }

    courseModuleController(){
        return new CourseModuleController();
    }

    courseActivityController() {
        return new CourseActivityController();
    }
    
};


export default Controller;