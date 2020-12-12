import BookService from './book.service';


class Service {
    bookService(){
        return new BookService();
    }
};

export default Service;