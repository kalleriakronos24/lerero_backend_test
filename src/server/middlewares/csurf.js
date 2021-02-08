import cookieParser from 'cookie-parser'
import csurf from 'csurf';


class CsrfProtection {

    /**
     * @description CSRF Protection | Middlewares
     * @returns csurf({ cookie : true })
     */
    csrfProtection(err, req, res, next) {

        // if (err.code !== "EBADCSRFTOKEN") {
        //     return next(err)
        // }

        // res.status(403);
        // res.json("no csrf token provided!", { 
        //     data : req.cookies 
        // });

        return null;
    }


};


export default CsrfProtection