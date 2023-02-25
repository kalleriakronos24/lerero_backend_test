import Service from '../services/default.service';


class ActivityController extends Service {
    constructor() {
        super()
    }

    async getActivities(req, res) {
        const module = super.activityService();
        return await module.getActivities(req, res);
    }

    async getActivityById(req, res) {
        const param = req.params
        const module = super.activityService();
        return await module.getActivityById(param, res);
    }

    async postActivity(req, res) {
        const module = super.activityService();
        return await module.postActivity(req.body.data, res);
    }

    async updateActivity(req, res) {
        const param = req.params;
        const module = super.activityService();
        return await module.updateActivity(param, req.body.data, res);
    }

    async deleteActivity(req, res) {
        const param = req.params;
        const module = super.activityService();
        return await module.deleteActivity(param, res);
    }
};


export default ActivityController;