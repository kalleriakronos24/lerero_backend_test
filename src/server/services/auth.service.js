// imports
import JwtService from "./jwt.service";
import bcrypt from 'bcrypt';
import Util from "../utils/customResponse";
import Models from "../models";

class AuthService {

    constructor() {
        this.jwt = new JwtService();
        this.model = new Models()
        this.util = new Util();
    };

    /**
     * 
     * @param {*} user Users
     * @description generate token jwt, this only triggers if all the validation is meet the conditions
     * @returns JwtToken1
     */
    async generateToken(user) {
        const token = this.jwt.signInToken(user);
        return token;
    };

    /**
     * 
     * @param {*} password string
     * @description Password Hashing using bcrypt
     * @returns hashedPassword with length 10
     */
    async hashPassword(password) {
        const hashPassword = bcrypt.hashSync(password, 10);
        return hashPassword;
    };

    async userRegister(response, user) {

        try {
            const { password } = user;

            // else 
            const check = await this.checkExist(user.username, user.email);

            if (check.exist) {
                this.util.setError(404, check.message);
                this.util.send(response);
                return;
            }

            const hashPassword = await this.hashPassword(password);
            const newUser = await this.model.user().create({
                ...user,
                password: hashPassword
            });

            this.util.setSuccess(201, "User Created!", newUser);
            this.util.send(response);
            return;
        } catch (error) {
            this.util.setError(404, error.message);
            this.util.send(response);
            return;
        }

    }

    /**
     * 
     * @param {*} password string
     * @param {*} username string
     * @description compare client's password to database user's password, if match then the user is valid
     * @returns Boolean
     */
    async comparePassword(password, username) {
        const userData = await this.model.user().findOne({ username });
        let isPasswordMatch;
        if (userData) {
            isPasswordMatch = bcrypt.compareSync(password, userData.password);
        }
        return isPasswordMatch;
    }

    /**
     * 
     * @param {*} res Reponse
     * @param {*} user { password: string , username: string }
     * @description Service to User to Login, checks if data the user's input is valid or not
     */
    async login(res, user) {
        const { password, username } = user;

        const validateUser = await this.validateUser(username);

        if (!validateUser.exist) {
            this.util.setError(401, validateUser.message);
            this.util.send(res);
            return;
        }

        const isPasswordMatch = await this.comparePassword(password, username);

        if (isPasswordMatch) {
            const userData = await this.model.user().findOne({ username })

            if (userData.status === 'inactive') {
                this.util.setError(401, "failed. you have your account inactive!");
                return this.util.send(res);
            }

            if (userData.status === 'blocked') {
                this.util.setError(401, "failed. you have your account blocked!");
                return this.util.send(res);
            };


            const token = await this.generateToken({ userData });
            const setToken = await this.model.auth().create({
                user: userData._id,
                token: token
            })
            this.util.setSuccess(201, "Login Successful", {
                user : userData._id,
                userRole : userData.userRole,
                token : token
            });
            return this.util.send(res);
        } else {
            this.util.setError(401, "there is no data with this information. please try again.",);
            return this.util.send(res);
        }
    };

    /**
     * 
     * @param {*} body { email: string, password: string }
     * @description to validate user, literally using the other method ( checkEmailIfExist )
     * @returns Boolean 
     */
    async validateUser(username) {

        const isUsernameExist = await this.model.user().findOne({
            username: username
        });

        const isEmailExist = await this.model.user().findOne({
            email: username
        })


        if (!isUsernameExist) {
            return {
                exist: !isUsernameExist,
                message: 'there is no data with this username'
            }
        } else if (!isEmailExist) {
            return {
                exist: !isEmailExist,
                message: 'there is no data with this email'
            }
        } else {
            return {
                exist: false,
                message: 'there is no data with this username / email'
            }
        }
    }

    async checkExist(username, email) {

        const isUsernameExist = await this.model.user().findOne({
            username: username
        }).count()

        const isEmailExist = await this.model.user().findOne({
            email: email
        }).count()

        if (isUsernameExist > 0) {
            return {
                exist: true,
                message: 'there is already data with this username'
            }
        }

        if (isEmailExist > 0) {
            return {
                exist: true,
                message: 'there is already data with this email'
            }
        }

        return {
            exist: false
        }

    }
};

export default AuthService;