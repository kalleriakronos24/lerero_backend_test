import AuthService from './auth.service';
import UserService from './user.service';


class Service {

    authService() {
        return new AuthService();
    };

    userService(){
        return new UserService();
    };

};

export default Service;