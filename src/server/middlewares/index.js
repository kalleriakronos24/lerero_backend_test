import Authorization from './auhtorization';
import CsrfProtection from './csurf';
import JwtAuthenticate from './jwt';


class Middlewares {

    /**
     * @description Jwt Middlewares / Guards
     */
    jwt() {
        return new JwtAuthenticate()
    }

    csrf() {
        return new CsrfProtection();
    }
    
    authorization() {
        return new Authorization()
    }
};


export default Middlewares;