import { ObjectId } from "bson";
import Models from "../models";
import Util from "../utils/customResponse";

class CourseService {
    constructor() {
        this.util = new Util()
        this.model = new Models()
    };


    async getCourses(request, response) {
        try {
            const data = await this.model.course().find().populate('learner provider').populate({
                path : 'courseModules',
                populate : {
                    path : 'module',
                }
            }).populate({
                path : 'courseModules',
                populate : {
                    path : 'activities',
                    populate : {
                        path : 'activity'
                    }
                }
            }).exec();
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log('error >> ', error);
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async getCourseById(param, response) {
        try {
            const data = await this.model.course().findById(param.id)
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async getCourseByLearnerId(param, response) {
        try {
            const data = await this.model.course().find({
                learner : param.id
            }).populate('learner provider').populate({
                path : 'courseModules',
                populate : {
                    path : 'module',
                }
            }).populate({
                path : 'courseModules',
                populate : {
                    path : 'activities',
                    populate : {
                        path : 'activity'
                    }
                }
            }).exec()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async postCourse(payload, response) {
        try {

            const courseModules = payload.modules || [];
            const courseModulesId = [];
            for (const value of courseModules) {
                const courseActivityIds = [];
                for (const activity of value.activities) {
                    const activities = await this.model.courseActivity().create({
                        _id : new ObjectId(),
                        activity: activity.id,
                        provider: payload.provider
                    });
                    activities.save();
                    courseActivityIds.push(activities._id);
                };
                const courseModule = await this.model.courseModule().create({
                    _id : new ObjectId(),
                    module : value.module,
                    provider: payload.provider,
                    activities : courseActivityIds
                });
                courseModule.save();
                courseModulesId.push(courseModule._id);
            };
            const data = await this.model.course().create({
                ...payload,
                courseModules : courseModulesId
            });
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log('error >> ', error);
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async viewCourse(request, response) {

        try {
            const queryParams = request.query;

            if(queryParams.step === '1') {
                
            };

            if(queryParams.step === '2') {

            };

        } catch(error){
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    };

    async updateCourse(param, payload, response) {
        try {
            const data = await (await this.model.course().findByIdAndUpdate(param.id, {
                $set: payload
            })).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async deleteCourse(params, response) {
        try {
            const data = await (await this.model.course().findByIdAndDelete(params.id))
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log('error >> ', error);
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }
};


export default CourseService;