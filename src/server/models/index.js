import database from '../../core/models/index';


class Model {

    /**
     * @description Users | User Model
     */
    user() {
        return database.User
    }

}

export default Model;