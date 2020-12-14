import Service from '../services/default.service';


class AuthController extends Service {
    constructor(){
        super();

    };

    async userRegister(req,res) {

        const auth = super.authService();
        const body = req.body;

        return await auth.userRegister(res, body);

    };

};


export default AuthController;