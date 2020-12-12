import BookRoutes from './book.routes';

class Routes {

    route(){
        return [
            new BookRoutes().route()
        ]
    };

};


export default Routes;