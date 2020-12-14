import jsonwebtoken from 'jsonwebtoken';
import 'dotenv';

class JwtService {
    constructor() {
        this.jwt = jsonwebtoken
    }

    signInToken(user) {

        console.log('user :: ', user);

        const token = this.jwt.sign(user, process.env.JWT_SECRET, { expiresIn : '360d' });

        return token;
    };

};


export default JwtService;