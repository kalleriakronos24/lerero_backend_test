import { Router } from 'express';
import Controller from '../controllers/default.controller';
import Middlewares from '../middlewares';


class CourseRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.course = super.courseController()
        this.auth = new Middlewares().authorization()
    }

    route(){
        return [
            this.router.get('/course', this.course.getCourses),
            this.router.get('/course/:id', this.course.getCourseById),
            this.router.get('/course/learner/:id', this.course.getCourseByLearnerId),
            this.router.post('/course',this.auth.rolesAllowed('administrator', 'provider'), this.course.postCourse),
            this.router.put('/course/:id',this.auth.rolesAllowed('administrator', 'provider'), this.course.updateCourse),
            this.router.delete('/course/:id',this.auth.rolesAllowed('administrator', 'provider'), this.course.deleteCourse),
        ]
    }
};


export default CourseRoutes;
