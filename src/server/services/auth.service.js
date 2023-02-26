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

    /**
     * 
     * @param {*} response Response
     * @param {*} user { email: string , password: string }
     * @async userRegister
     * @description Service to Register user to the Database
     * @returns Users { id: number, fullname: string, username: string, wallet: number }
     */
    async userRegister(response, user) {

        const { password } = user;

        // else 

        const hashPassword = await this.hashPassword(password);

        const newUser = await this.model.user().create({
            ...user,
            password : hashPassword
        });
        
        this.util.setSuccess(201, "User Created!", newUser);
        return this.util.send(response);
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
     * @param {*} user { password: string , email: string }
     * @description Service to User to Login, checks if data the user's input is valid or not
     * @returns JwtToken | if email not found return json { message : "Email not found" } | if email is valid but the password is incorrect return json { message : "password is incorrect, try again" }
     */
    async login(res, user) {
        const { password, username } = user;

        const validateUser = await this.validateUser(username);

        if (!validateUser) {
            this.util.setError(401, "Username not found");
            this.util.send(res);
            return;
        }

        const isPasswordMatch = await this.comparePassword(password, username);

        if (isPasswordMatch) {

            const userData = await this.model.user().findOne({ username })

            const token = await this.generateToken({ userData });

            const setToken = await this.model.auth().create({
                user : userData._id,
                token : token
            });

            this.util.setSuccess(201, "Login Successful", { setToken });
            return this.util.send(res);
        } else {
            this.util.setError(401, "password is incorrect, please try again");
            return this.util.send(res);
        }

    };

    /**
     * 
     * @param {*} body { email: string, password: string }
     * @description to validate user, literally using the other method ( checkEmailIfExist )
     * @returns Boolean 
     */
    async validateUser(body) {

        const { username } = body;

        const isUsernameExist = await this.model.user().findOne({
            username
        });

        return !isUsernameExist;
    }
};

export default AuthService;