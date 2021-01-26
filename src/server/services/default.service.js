import AuthService from './auth.service';
import BookService from './book.service';
import UserService from './user.service';


class Service {
    
    bookService(){
        return new BookService();
    }

    authService() {
        return new AuthService();
    };

    userService(){
        return new UserService();
    };

};

export default Service;