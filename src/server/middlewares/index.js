import JwtAuthenticate from './jwt';


class Middlewares {

    jwt() {
        return new JwtAuthenticate()
    }
    
};


export default Middlewares;