import database from '../../core/models/index';


class Model {

    /**
     * @description Books | Book Model
     */
    book() {
        return database.Book
    }

    /**
     * @description Users | User Model
     */
    user() {
        return database.User
    }

}

export default Model;