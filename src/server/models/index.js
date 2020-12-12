import database from '../../core/models/index';


class Model {

    book(){
        return database.Book
    }
    
}

export default Model;