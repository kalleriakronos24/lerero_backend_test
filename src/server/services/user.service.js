// imports
import JwtService from "./jwt.service";
import bcrypt from 'bcrypt';
import Util from "../utils/customResponse";
import Models from "../models";

class UserService {

    constructor() {
        this.jwt = new JwtService();
        this.model = new Models()
        this.util = new Util();
    };


    async getUsers(request, response) {
        try {
            const data = await this.model.user().find()
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

    async getUserByKeyword(request, response) {
        try {
            const queryParams = request.query;
            const data = await this.model.user().find({
                userRole : queryParams.userRole
            })
            this.util.setSuccess(200, "success", data);
            return this.util.send(response);
        } catch (error) {
            this.util.setError(402, "failed", error);
            return this.util.send(response);
        }
    }

};

export default UserService;