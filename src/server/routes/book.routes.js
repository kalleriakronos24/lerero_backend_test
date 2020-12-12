import Controller from '../controllers/default.controller';
import {Router} from 'express';

class BookRoutes extends Controller {
    constructor(){
        super();
        this.bookController = super.bookController();
        this.router = Router();
    }

    route(){
        return [
            this.router.get('/book/get-books', this.bookController.getAllBooks),
            this.router.post('/book/add-book', this.bookController.addNewBook)
        ]
    }
};


export default BookRoutes;