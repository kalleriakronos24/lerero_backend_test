import database from '../../core/models/index';


class Model {

    book() {
        return database.Book
    }

    user() {
        return database.User
    }
    
}

export default Model;