import { Router } from 'express';
import Controller from '../controllers/default.controller';


class CourseRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.course = super.courseController()
    }

    route(){
        return [
            this.router.get('/course', this.course.getCourses),
            this.router.get('/course/:id', this.course.getCourseById),
            this.router.post('/course', this.course.postCourse),
            this.router.put('/course/:id', this.course.updateCourse),
            this.router.delete('/course/:id', this.course.deleteCourse),
        ]
    }
};


export default CourseRoutes;
