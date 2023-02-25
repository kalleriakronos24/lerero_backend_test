import { Router } from 'express';
import Controller from '../controllers/default.controller';


class ModuleRoutes extends Controller {
    constructor(){
        super();
        this.router = Router();
        this.module = super.moduleController()
    }

    route(){
        return [
            this.router.get('/module', this.module.getModules),
            this.router.get('/module/:id', this.module.getModuleById),
            this.router.post('/module', this.module.postModule),
            this.router.put('/module/:id', this.module.updateModule),
            this.router.delete('/module/:id', this.module.deleteModule),
        ]
    }
};


export default ModuleRoutes;
