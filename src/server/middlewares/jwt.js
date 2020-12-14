import jwt from 'jsonwebtoken';
import 'dotenv';

class JwtAuthenticate {


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