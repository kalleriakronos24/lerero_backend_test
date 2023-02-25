import Models from "../models";
import Util from "../utils/customResponse";

class ActivityService {
    constructor() {
        this.util = new Util()
        this.model = new Models()
    };


    async getActivities(request, response) {
        try {
            const data = await this.model.activity().find()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async getActivityById(param, response) { 
        try {
            const data = await this.model.activity().findById(param.id)
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async postActivity(payload, response) { 
        try {
            const data = await (await this.model.activity().create(payload)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async updateActivity(param, payload, response) { 
        try {
            const data = await (await this.model.activity().findByIdAndUpdate(param.id, {
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


     async deleteActivity(params, response) {
        try {
            const data = await (await this.model.activity().findByIdAndDelete(params.id)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }
};


export default ActivityService;