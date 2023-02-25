import { Router } from 'express';
import Controller from '../controllers/default.controller';


class CourseModulesRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.courseModule = super.courseModuleController()
    }

    route(){
        return [
            this.router.get('/course-module', this.courseModule.getCourseModule),
            this.router.get('/course-module/:id', this.courseModule.getCourseModuleById),
            this.router.post('/course-module', this.courseModule.postCourseModule),
            this.router.put('/course-module/:id', this.courseModule.updateCourseModule),
            this.router.delete('/course-module/:id', this.courseModule.deleteCourseModule),
        ]
    }
};


export default CourseModulesRoutes;
