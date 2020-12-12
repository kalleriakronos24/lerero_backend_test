import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import { app_url } from '../app';


chai.use(chaiHttp);

const { expect } = chai;

describe('Book Endpoint Tests :', () => {

    it('it should create a book', (done) => {
        const book = {
            title: 'My Test Book',
            price: 'Rp.1000',
            description: 'test description'
        };

        chai.request(app_url)
            .post('/api/v1/book/add-book')
            .set('Accept', 'application/json')
            .send(book)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body.data).to.include({
                    id: 1,
                    title: 'My Test Book',
                    price: 'Rp.1000',
                    description: 'test description'
                })
                done();
            })
    });

    it('it should not create a book with incomplete parameters ', (done) => {
        const book = {
            price: 'Rp.1000',
            description: 'test description'
        }

        chai.request(app_url)
            .post('/api/v1/book/add-book')
            .set('Accept', 'application/json')
            .send(book)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            })
    })

    it('it should get all books', (done) => {
        chai.request(app_url)
            .get('/api/v1/book/get-books')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body.data[0].should.have.property('id');
                res.body.data[0].should.have.property('title')
                res.body.data[0].should.have.property('price')
                res.body.data[0].should.have.property('description');
                done();
            })
    })
})