import Models from "../models";
import Util from "../utils/customResponse";

class CourseActivityService {
    constructor() {
        this.util = new Util()
        this.model = new Models()
    };


    async getCourseActivities(request, response) {
        try {
            const data = await this.model.courseActivity().find().populate('activity').exec();
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async getCourseActivityById(param, response) { 
        try {
            const data = await this.model.courseActivity().findById(param.id).populate('activity').exec();
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async postCourseActivity(payload, response) {
        try {
            const data = await (await this.model.courseActivity().create(payload)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async updateCourseActivity(param, payload, response) {
        try {
            const data = await (await this.model.courseActivity().findByIdAndUpdate(param.id, {
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


     async deleteCourseActivity(params, response) {
        try {
            const data = await (await this.model.courseActivity().findByIdAndDelete(params.id)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    };
};


export default CourseActivityService;