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
    
};


export default Middlewares;