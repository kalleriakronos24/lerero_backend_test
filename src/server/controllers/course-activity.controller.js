import Service from '../services/default.service';


class CourseActivityController extends Service {
    constructor() {
        super()
    }

    async getCourseActivity(req, res) {
        const module = super.courseActivity();
        return await module.getCourseActivities(req, res);
    }

    async getCourseActivityById(req, res) {
        const param = req.params
        const module = super.courseActivity();
        return await module.getCourseActivityById(param, res);
    }

    async postCourseActivity(req, res) {
        const module = super.courseActivity();
        return await module.postCourseActivity(req.body.data, res);
    }

    async updateCourseActivity(req, res) {
        const param = req.params;
        const module = super.courseActivity();
        return await module.updateCourseActivity(param, req.body.data, res);
    }

    async deleteCourseActivity(req, res) {
        const param = req.params;
        const module = super.courseActivity();
        return await module.deleteCourseActivity(param, res);
    }
};


export default CourseActivityController;