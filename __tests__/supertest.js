const request = require('supertest');
const server = 'http://localhost:3000';

describe('Route integration', () => { 
  describe('/', () => {
    describe('GET', () => {
      it('responds with text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
      });
    });
  });
  

  describe('/user', () => {
    describe('POST /login', () => {
      let userData = {
        _id: "5ea09081e873fd3ee7238ef2",
        usernamae: "name",
        cash: 100000,
        stocks: [{stock: "IBM", shares: "2", currValue: 117}],
        success: true,
      }
      it('responds with json containing user data', (done) => {
        return request(server)
        .post('/user/login')
        .send(userData)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          if(err) return done(err);
          done();
        })
      });
    });
  });

  describe('POST /getdata', () => {
    let user = {_id: "5ea09081e873fd3ee7238ef2"}
    it('responds with 200 and json data', () => {
      return request(server)
        .post('/user/getdata')
        .send(user)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
    });
  });
});