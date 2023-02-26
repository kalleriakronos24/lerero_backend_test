import Service from '../services/default.service';


class UserController extends Service {
    constructor() {
        super()
    };

    async getUsers(req, res) {
        const user = super.userService();
        return await user.getUsers(req, res);
    };

    async getUserByKeyword(req, res) {
        const user = super.userService();
        return await user.getUserByKeyword(req, res);
    };

};


export default UserController;