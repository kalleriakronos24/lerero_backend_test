import Controller from '../controllers/default.controller';
import {Router} from 'express';
import Middlewares from '../middlewares';

class BookRoutes extends Controller {
    constructor(){
        super();
        this.bookController = super.bookController();
        this.router = Router();
        this.auth = new Middlewares().jwt().authenticateToken
    }

    route(){
        return [
            this.router.get('/book/get-books', this.bookController.getAllBooks),
            this.router.post('/book/add-book', this.bookController.addNewBook),
            this.router.get('/book/get/all-books', this.auth , this.bookController.getAllBooks)
        ]
    }
};


export default BookRoutes;