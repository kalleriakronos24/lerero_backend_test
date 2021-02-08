import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import { app_url } from '../app';
import request from 'request';

chai.use(chaiHttp);

const { expect } = chai;

describe('Book Endpoint Tests :', () => {

    it('it should create a book', (done) => {
        const book = {
            title: 'My Test Book',
            price: 'Rp.1000',
            description: 'test description',
            userId: 1
        };

        chai.request(app_url)
            .post('/api/v1/book/add-books')
            .set('Accept', 'application/json')
            .send(book)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body.message).to.equal('Book added!');
                expect(res.body.data).to.include({
                    title: 'My Test Book',
                    price: 'Rp.1000',
                    description: 'test description',
                    userId: 1
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
            .post('/api/v1/book/add-books')
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
                res.body.data[0].should.have.property('userId');
                done();
            })
    });


    it('it should have access token to access /book/get/all-books route', (done) => {

        const body = {
            email: "madacool222@gmail.com",
            password: '12345678'
        };

        request.post(`${app_url}/api/v1/auth/sign-in`, {
            headers: {
                'Accept': 'application/json'
            },
            form : {
                email : body.email,
                password : body.password
            }
        }, (err, res, responseBody) => {

            chai.request(app_url)
                .get('/api/v1/book/get/all-books')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${JSON.parse(responseBody).data.token}`)
                .end((error, response) => {
                    expect(response.status).to.not.equal(401);
                    expect(response.status).to.not.equal(403);
                    done();
                })

        });
    })

    it('it should not possible to access /book/get/all-books route (with auth middleware) with a empty token / invalid token', (done) => {

        const body = {
            email: "madacool222@gmail.com",
            password: '12345678'
        };

        request.post(`${app_url}/api/v1/auth/sign-in`, {
            headers: {
                'Accept': 'application/json'
            },
            form : {
                email : body.email,
                password : body.password
            }
        }, (err, res, responseBody) => {

            chai.request(app_url)
                .get('/api/v1/book/get/all-books')
                .set('Accept', 'application/json')
                .set('Authorization', `Bearer ${JSON.parse(responseBody).data.token + 'aaaa'}`)
                .end((error, response) => {
                    expect(response.status).to.be.oneOf([401,403]);
                    done();
                })

        });
    })
})