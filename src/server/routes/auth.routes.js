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
            this.router.post('/auth/sign-in', super.authController().userLogin),
            this.router.post('/auth/set-cookie', super.authController().setUsersCookie),
            this.router.get('/auth/fetch-cookie', super.authController().fetchUsersCookie)
        ]
    }
};


export default AuthRoutes;
