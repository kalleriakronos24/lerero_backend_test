import AuthController from './auth.controller';
import BookController from './book.controller';


class Controller {

    /**
     * @description Book Controller
     */
    bookController(){
        return new BookController();
    };

    /**
     * Authentication Controller
     */
    authController() {
        return new AuthController();
    }
    
};


export default Controller;