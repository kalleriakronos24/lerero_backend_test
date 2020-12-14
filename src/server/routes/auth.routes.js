import { Router } from 'express';
import Controller from '../controllers/default.controller';


class AuthRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
    }

    route(){
        return [
            this.router.post('/auth/sign-up', super.authController().userRegister),
            this.router.post('/auth/sign-in', super.authController().userLogin)
        ]
    }
};


export default AuthRoutes;
