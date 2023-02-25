import { Router } from 'express';
import Controller from '../controllers/default.controller';


class ActivityRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.activity = super.activityController()
    }

    route(){
        return [
            this.router.get('/activity', this.activity.getActivities),
            this.router.get('/activity/:id', this.activity.getActivityById),
            this.router.post('/activity', this.activity.postActivity),
            this.router.put('/activity/:id', this.activity.updateActivity),
            this.router.delete('/activity/:id', this.activity.deleteActivity),
        ]
    }
};


export default ActivityRoutes;
