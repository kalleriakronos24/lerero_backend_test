import jwt from 'jsonwebtoken';
import 'dotenv';

class JwtAuthenticate {

    /**
     * 
     * @param {*} req Request
     * @param {*} res Response
     * @param {*} next Next
     * @description endpoint guard to check if the someone who access this endpoint with this guard provided have JwtToken included in their Authorization header's, if the token is provided proceed to the next process ( next() )
     * @returns if no token returns res.status(401) | next() proceed to next process
     */
    authenticateToken(req, res, next) {

        const header = req.headers['Authorization'];

        const token = header && header.split(' ')[1];

        if (token === null) {
            return res.sendStatus(401);
        }

        // else
        console.log('SECRET JWT', process.env.JWT_SECRET);

        jwt.verify(token, process.env.JWT_SECRET, (err, data) => {

            if (err) {
                return res.sendStatus(403);
            }

            req.user = data;

            next();
        });
    }
};

export default JwtAuthenticate;