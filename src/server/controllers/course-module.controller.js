import Service from '../services/default.service';


class CourseModuleController extends Service {
    constructor() {
        super()
    }

    async getCourseModule(req, res) {
        const module = super.courseModule();
        return await module.getCourseModules(req, res);
    }

    async getCourseModuleById(req, res) {
        const param = req.params
        const module = super.courseModule();
        return await module.getCourseModuleById(param, res);
    }

    async postCourseModule(req, res) {
        const module = super.courseModule();
        return await module.postCourseModule(req.body.data, res);
    }

    async updateCourseModule(req, res) {
        const param = req.params;
        const module = super.courseModule();
        return await module.updateCourseModule(param, req.body.data, res);
    }

    async deleteCourseModule(req, res) {
        const param = req.params;
        const module = super.courseModule();
        return await module.deleteCourseModule(param, res);
    }
};


export default CourseModuleController;