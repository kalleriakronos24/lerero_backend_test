import Models from "../models";
import Util from "../utils/customResponse";

class CourseModuleService {
    constructor() {
        this.util = new Util()
        this.model = new Models()
    }

    async getCourseModules(request, response) {
        try {
            const data = await this.model.courseModule().find().populate({
                path : 'activities',
                populate: {
                    path: 'activity'
                 },
            }).populate('module').exec()
            this.util.setSuccess(200, "success", data)
            return this.util.send(response)
        } catch (error) {
            this.util.setError(402, "failed", error)
            return this.util.send(response)
        }
    }

    async getCourseModuleById(param, response) {
        try {
            const data = await this.model.courseModule().findById(param.id).populate('module activities').exec();
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async postCourseModule(payload, response) { 
        try {
            const data = await (await this.model.courseModule().create(payload)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async updateCourseModule(param, payload, response) { 
        try {
            const data = await (await this.model.courseModule().findByIdAndUpdate(param.id, {
                $set : payload
            })).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
     }

     async deleteCourseModule(params, response) {
        try {
            const data = await (await this.model.courseModule().findByIdAndDelete(params.id)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }
};


export default CourseModuleService;