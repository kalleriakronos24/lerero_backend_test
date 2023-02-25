import { Router } from 'express';
import Controller from '../controllers/default.controller';


class CourseActivityRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.courseActivity = super.courseActivityController()
    }

    route(){
        return [
            this.router.get('/course-activity', this.courseActivity.getCourseActivity),
            this.router.get('/course-activity/:id', this.courseActivity.getCourseActivityById),
            this.router.post('/course-activity', this.courseActivity.postCourseActivity),
            this.router.put('/course-activity/:id', this.courseActivity.updateCourseActivity),
            this.router.delete('/course-activity/:id', this.courseActivity.deleteCourseActivity),
        ]
    }
};


export default CourseActivityRoutes;
