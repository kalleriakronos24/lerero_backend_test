import { Router } from 'express';
import Controller from '../controllers/default.controller';
import Middlewares from '../middlewares';

class ActivityRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.activity = super.activityController()
        this.auth = new Middlewares().authorization()
    }

    route(){
        return [
            this.router.get('/activity', this.activity.getActivities),
            this.router.get('/activity/:id', this.activity.getActivityById),
            this.router.post('/activity', this.auth.rolesAllowed('administrator', 'provider'), this.activity.postActivity),
            this.router.put('/activity/:id', this.auth.rolesAllowed('administrator', 'provider'), this.activity.updateActivity),
            this.router.delete('/activity/:id', this.auth.rolesAllowed('administrator', 'provider'), this.activity.deleteActivity),
        ]
    }
};


export default ActivityRoutes;
