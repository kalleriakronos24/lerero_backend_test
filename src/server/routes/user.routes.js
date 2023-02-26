import { Router } from 'express';
import Controller from '../controllers/default.controller';
import Middlewares from '../middlewares';


class UserRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.user = super.userController()
        this.auth = new Middlewares().authorization()
    }

    route(){
        return [
            this.router.get('/user', this.user.getUsers),
            this.router.get('/user', this.user.getUserByKeyword),
        ]
    }
};

export default UserRoutes;
