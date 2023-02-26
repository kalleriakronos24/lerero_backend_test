import { Router } from 'express';
import Controller from '../controllers/default.controller';
import Middlewares from '../middlewares';


class ModuleRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.module = super.moduleController()
        this.auth = new Middlewares().authorization()
    }

    route(){
        return [
            this.router.get('/module', this.module.getModules),
            this.router.get('/module/:id', this.module.getModuleById),
            this.router.post('/module',this.auth.rolesAllowed('administrator', 'provider'), this.module.postModule),
            this.router.put('/module/:id',this.auth.rolesAllowed('administrator', 'provider'), this.module.updateModule),
            this.router.delete('/module/:id',this.auth.rolesAllowed('administrator', 'provider'), this.module.deleteModule),
        ]
    }
};


export default ModuleRoutes;
