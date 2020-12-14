import AuthController from './auth.controller';
import BookController from './book.controller';


class Controller {

    bookController(){
        return new BookController();
    };

    authController() {
        return new AuthController();
    }
    
};


export default Controller;