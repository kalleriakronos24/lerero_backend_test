import Service from '../services/default.service';


class CourseController extends Service {
    constructor() {
        super()
    }

    async getCourses(req, res) {
        const course = super.courseService();
        return await course.getCourses(req, res);
    }

    async getCourseById(req, res) {
        const param = req.params
        const course = super.courseService();
        return await course.getCourseById(param, res);
    }

    async getCourseByLearnerId(req, res) {
        const param = req.params
        const course = super.courseService();
        return await course.getCourseByLearnerId(param, res);
    }

    async postCourse(req, res) {
        const course = super.courseService();
        return await course.postCourse(req.body.data, res);
    }

    async updateCourse(req, res) {
        const param = req.params;
        const course = super.courseService();
        return await course.updateCourse(param, req.body.data, res);
    }

    async deleteCourse(req, res) {
        const param = req.params;
        const module = super.courseService();
        return await module.deleteCourse(param, res);
    }
};


export default CourseController;