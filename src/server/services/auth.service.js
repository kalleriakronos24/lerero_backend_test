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
            this.util.setError(401, "Email has been used, please use another email");
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

    async comparePassword(password, email) {


        const userData = await this.user.findOne({ where: { email } });
        let isPasswordMatch;

        if (userData) {
            isPasswordMatch = bcrypt.compareSync(password, userData.password);
        }; 

        return isPasswordMatch;

    }


    async login(res, user) {


        const { password, email } = user;


        const validateUser = await this.validateUser(user);

        if(!validateUser){
            this.util.setError(401, "Email not found");
            this.util.send(res);
            return;
        } 


        const isPasswordMatch = await this.comparePassword(password, email);

        if (isPasswordMatch) {

            const userData = await this.user.findOne({ where: { email } });

            const token = await this.generateToken({ ...userData });

            this.util.setSuccess(201, "Login Successful", { token });
            return this.util.send(res);

        } else {

            this.util.setError(401, "password is incorrect, please try again");
            return this.util.send(res);

        }

    };

    validateUser(body) {

        const { email } = body;

        const isEmailValid = this.checkIfEmailExist(email);

        return isEmailValid;

    }

};

export default AuthService;