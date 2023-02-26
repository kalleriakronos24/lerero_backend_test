import ActivityController from './activity.controller';
import AuthController from './auth.controller';
import CourseActivityController from './course-activity.controller';
import CourseModuleController from './course-module.controller';
import CourseController from './course.controller';
import ModuleController from './module.controller';
import UserController from './user.controller';

class Controller {

    userController() {
        return new UserController();
    };
    
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