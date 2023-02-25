import Service from '../services/default.service';


class ModuleController extends Service {
    constructor() {
        super()
    }

    async getModules(req, res) {
        const module = super.moduleService();
        return await module.getModules(req, res);
    }

    async getModuleById(req, res) {
        const param = req.params
        const module = super.moduleService();
        return await module.getModuleById(param, res);
    }

    async postModule(req, res) {
        const module = super.moduleService();
        return await module.postModule(req.body.data, res);
    }

    async updateModule(req, res) {
        const param = req.params;
        const module = super.moduleService();
        return await module.updateModule(param, req.body.data, res);
    }

    async deleteModule(req, res) {
        const param = req.params;
        const module = super.moduleService();
        return await module.deleteModule(param, res);
    }
};


export default ModuleController;