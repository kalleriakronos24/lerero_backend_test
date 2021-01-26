import cookieParser from'cookie-parser'
import csurf from 'csurf';


class CsrfProtection {
    
    /**
     * @description CSRF Protection | Middlewares
     * @returns csurf({ cookie : true })
     */
    csrfProtection(){
        return csurf({ cookie : true });
    }

};


export default CsrfProtection