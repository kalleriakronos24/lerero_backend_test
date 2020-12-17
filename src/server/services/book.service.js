import Model from '../models/index';


class BookService extends Model {
    constructor(){
        super();
        this.model = super.book();
    }
    
    /**
     * @description retrieve all the books from Book Model
     * @returns Books
     */
    async getAllBooks() {
        try {
            return await this.model.findAll();
        } catch (e) {
            throw e;
        }
    }

    /**
     * 
     * @param {*} newBook Books
     * @description add new Books to the Book Model
     * @returns Books
     */
    async addBook(newBook){
        try{
            return await this.model.create(newBook);
        } catch(e) {
            throw e;
        }
    }
}

export default BookService;