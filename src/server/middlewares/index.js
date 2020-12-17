import JwtAuthenticate from './jwt';


class Middlewares {

    /**
     * @description Jwt Middlewares / Guards
     */
    jwt() {
        return new JwtAuthenticate()
    }
    
};


export default Middlewares;