import Model from '../models/index';


class BookService extends Model {
    constructor(){
        super();
        this.model = super.book();
    }
    
    async getAllBooks() {
        try {
            return await this.model.findAll();
        } catch (e) {
            throw e;
        }
    }

    async addBook(newBook){
        try{
            return await this.model.create(newBook);
        } catch(e) {
            throw e;
        }
    }
}

export default BookService;