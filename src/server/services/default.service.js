import ActivityService from './activity.service';
import AuthService from './auth.service';
import CourseActivityService from './course-activity.service';
import CourseModuleService from './course-module.service';
import CourseService from './course.service';
import ModuleService from './module.service';
import UserService from './user.service';


class Service {

    authService() {
        return new AuthService();
    };

    userService(){
        return new UserService();
    };

    moduleService(){
        return new ModuleService();
    }

    activityService(){
        return new ActivityService()
    }

    courseService(){
        return new CourseService();
    }

    courseModule() {
        return new CourseModuleService();
    }

    courseActivity() {
        return new CourseActivityService();
    }
};

export default Service;