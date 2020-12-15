import { resolve } from 'path';
import Service from '../services/default.service';
import Util from '../utils/customResponse';

const util = new Util();

class BookController extends Service {
    constructor() {
        super();
    };


    async getAllBooks(req, res) {

        try {
            const allBooks = await super.bookService().getAllBooks();
            if (allBooks.length > 0) {
                util.setSuccess(200, "Books Retrieved", allBooks);
            } else {
                util.setSuccess(200, "No Data Retrieved");
            }
            return util.send(res);
        } catch (e) {
            util.setError(400, e);
            return util.send(res);
        }
    }

    async addNewBook(req, res) {

        const { title, price, description, userId } = req.body;

        if (!title || !price || !description || !userId) {
            util.setError(400, "Please Provide A Complete Data");
            return util.send(res);
        }

        const addBook = req.body;

        try {

            const newBook = await super.bookService().addBook(addBook)
                .then(response => response)
                .catch(err => err);

            util.setSuccess(201, "Book added!", newBook);
            return util.send(res);

        } catch (e) {
            util.setError(400, e.message);
            return util.send(res);

        }
    }

};

export default BookController;