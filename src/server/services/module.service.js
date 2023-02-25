import Models from "../models";
import Util from "../utils/customResponse";

class ModuleService {
    constructor() {
        this.util = new Util()
        this.model = new Models()
    };


    async getModules(request, response) {
        try {
            const data = await this.model.module().find().populate('activity').exec()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async getModuleById(param, response) { 
        try {
            const data = await this.model.module().findById(param.id).populate('activity').exec()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async postModule(payload, response) { 
        try {
            console.log(payload)
            const data = await (await this.model.module().create(payload)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async updateModule(param, payload, response) { 
        try {
            const data = await (await this.model.module().findByIdAndUpdate(param.id, {
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

     async deleteModule(params, response) {
        try {
            const data = await (await this.model.module().findByIdAndDelete(params.id)).save()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            console.log(error)
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }
};


export default ModuleService;