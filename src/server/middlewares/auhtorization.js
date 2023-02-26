import jwt from 'jsonwebtoken';
import 'dotenv';

class Authorization {

    /**
     * 
     * @param {*} req Request
     * @param {*} res Response
     * @param {*} next Next
     * @description endpoint guard to check if the someone who access this endpoint with this guard provided have JwtToken included in their Authorization header's, if the token is provided proceed to the next process ( next() )
     * @returns if no token returns res.status(401) | next() proceed to next process
     */
    rolesAllowed(...roles) {
        return (req, res, next) => {

            const header = req.headers['authorization'];

            const token = header && header.split(' ')[1];

            if (!token) {
                return res.sendStatus(401);
            }

            // else

            jwt.verify(token, process.env.JWT_SECRET, (err, data) => {

                if (err) {
                    return res.sendStatus(403);
                }
                req.user = data
                req.roles = [data.userData.userRole];
                if (!req?.roles) return res.sendStatus(401);
                const rolesArray = [...roles];
                const result = req.roles.map((role) => rolesArray.includes(role)).find((val) => val === true);
                if (!result) return res.sendStatus(401);
                next()
            });


           
        }
    }
};

export default Authorization;