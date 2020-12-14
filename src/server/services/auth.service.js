// imports
import JwtService from "./jwt.service";
import bcrypt from 'bcrypt';
import Model from '../models/index';
import Util from "../utils/customResponse";


class AuthService {

    constructor() {
        this.jwt = new JwtService();
        this.user = new Model().user();
        this.util = new Util();
    };

    async generateToken(user) {

        const token = await this.jwt.signInToken(user);

        return token;
    };

    async hashPassword(password) {

        const hashPassword = bcrypt.hashSync(password, 10);

        return hashPassword;
    };


    async userRegister(response, user) {

        const { email, password } = user;

        const emailCheck = await this.checkIfEmailExist(email);

        if (emailCheck) {
            this.util.setError(401, "Email has been used, please use another email !!!!!!");
            return this.util.send(response);
        };

        // else 

        const hashPassword = await this.hashPassword(password);


        const newUser = await this.user.create({ ...user, password: hashPassword });

        // generate token
        // const token = await this.generateToken({ ...newUser});

        this.util.setSuccess(201, "User Created!", newUser);

        return this.util.send(response);

    };


    async checkIfEmailExist(email) {

        return new Promise(async (resolve, reject) => {
            const check = await this.user.findOne({ where: { email: email } }, (err, data) => {
                return data;
            });

            resolve(check);;
        })

    };

    comparePassword(password) {



    }


    login(user) {

    }

    validateUser(username, password) {

    }

};

export default AuthService;