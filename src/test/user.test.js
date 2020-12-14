import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import { app_url } from '../app';


chai.use(chaiHttp);

const { expect } = chai;


describe('User Endpoint Tests : ', () => {


    it('it should create new user', (done) => {

        const body = {
            fullname: 'Mada Dwi Nugraha',
            username: "madanugraha",
            password: '12345678',
            wallet: 10000,
            email: "madacool222@gmail.com"
        };

        chai.request(app_url)
            .post('/api/v1/auth/sign-up')
            .set('Accept', 'application/json')
            .send(body)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body.message).to.equal('User Created!');
                expect(res.body.data).to.include({
                    id: 1,
                    fullname: "Mada Dwi Nugraha",
                    username: "madanugraha",
                    wallet: 10000,
                    email: "madacool222@gmail.com"
                });
                done();
            })

    });

    it('it should not possible to have duplicate emails on the database', (done) => {

        const body = {
            fullname: 'Mada Dwi Nugraha',
            username: "madanugraha",
            password: '12345678',
            wallet: 10000,
            email: "madacool222@gmail.com"
        };

        chai.request(app_url)
            .post('/api/v1/auth/sign-up')
            .set('Accept', 'application/json')
            .send(body)
            .end((err, res) => {
                expect(res.status).to.equal(401);
                expect(res.body.message).to.equal('Email has been used, please use another email');
                done();
            })
    });

    it('it should give a jwt token when the user logged in with status 201', (done) => {

        const body = {
            email: 'madacool222@gmail.com',
            password: '12345678'
        };


        chai.request(app_url)
            .post('/api/v1/auth/sign-in')
            .set('Accept', 'application/json')
            .send(body)
            .end((err, res) => {

                expect(res.status).to.equal(201);
                expect(res.body.message).to.equal("Login Successful");
                expect(res.body.data.token).to.not.undefined;
                expect(res.body.data.token).to.not.null
                expect(res.body.data.token).to.not.false
                done();
                
            });


    });

    it('it should not possible to login with wrong / invalid password from the client', (done) => {


        const body = {
            email: "madacool222@gmail.com",
            password: '1234567800000'
        };

        chai.request(app_url)
            .post('/api/v1/auth/sign-in')
            .set('Accept', 'application/json')
            .send(body)
            .end((err, res) => {

                expect(res.status).to.equal(401)
                expect(res.body.message).to.equal("password is incorrect, please try again");
                done()

            })
    })


    it('it should not possible to login with wrong / invalid email from the client ', (done) => {


        const body = {
            email: "123123213",
            password: '1234567800000'
        };

        chai.request(app_url)
            .post('/api/v1/auth/sign-in')
            .set('Accept', 'application/json')
            .send(body)
            .end((err, res) => {

                expect(res.status).to.equal(401)
                expect(res.body.message).to.equal("Email not found");
                done()

            })
    })



});

