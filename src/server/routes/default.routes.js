import ActivityRoutes from './activity.routes';
import AuthRoutes from './auth.routes';
import CourseActivityRoutes from './course-activity.routes';
import CourseModulesRoutes from './course-module.routes';
import CourseRoutes from './course.routes';
import ModuleRoutes from './module.routes';
import UserRoutes from './user.routes';

class Routes {
    route(){
        return [
            new AuthRoutes().route(),
            new ModuleRoutes().route(),
            new ActivityRoutes().route(),
            new CourseRoutes().route(),
            new CourseActivityRoutes().route(),
            new CourseModulesRoutes().route(),
            new UserRoutes().route()
        ]
    };
};


export default Routes;