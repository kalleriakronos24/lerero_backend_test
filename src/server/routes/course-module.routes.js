import { Router } from 'express';
import Controller from '../controllers/default.controller';
import Middlewares from '../middlewares';


class CourseModulesRoutes extends Controller {
    constructor() {
        super();
        this.router = Router();
        this.courseModule = super.courseModuleController()
        this.auth = new Middlewares().authorization()
    }

    route() {
        return [
            this.router.get('/course-module', this.courseModule.getCourseModule),
            this.router.get('/course-module/:id', this.courseModule.getCourseModuleById),
            this.router.post('/course-module', this.auth.rolesAllowed('administrator', 'provider'), this.courseModule.postCourseModule),
            this.router.put('/course-module/:id', this.auth.rolesAllowed('administrator', 'provider'), this.courseModule.updateCourseModule),
            this.router.delete('/course-module/:id', this.auth.rolesAllowed('administrator', 'provider'), this.courseModule.deleteCourseModule),
        ]
    }
};


export default CourseModulesRoutes;
