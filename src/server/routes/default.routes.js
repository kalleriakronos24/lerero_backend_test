import AuthRoutes from './auth.routes';
import BookRoutes from './book.routes';

class Routes {

    route(){
        return [
            new BookRoutes().route(),
            new AuthRoutes().route()
        ]
    };

};


export default Routes;