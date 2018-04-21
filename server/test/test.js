// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const ko = require('nekodb');
const db = require('../models');


// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');

const should = chai.should();

chai.use(chaiHttp);
// Our parent block
describe('Skill', () => {
  let lengthSkills = 0;
  beforeEach((done) => { // Before each test get the length of the Skills array
    db.Skill.find({}).then((instances) => {
      lengthSkills = instances.length;
      done();
    });     
  });
  /*
  * Test the /GET route
  */
  describe('/GET skills', () => {
    it('it should GET all the skills', (done) => {
      chai.request(server)
        .get('/api/skills')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(lengthSkills);
          done();
        });
    });
  });
});
describe('Need', () => {
  let lengthNeeds = 0;
  beforeEach((done) => { // Before the test, get the length of the Needs array
    db.Need.find({}).then((instances) => {
      lengthNeeds = instances.length;
      done();         
    });     
  });
  /*
  * Test the /GET route
  */
  describe('/GET needs', () => {
    it('it should GET all the needs', (done) => {
      chai.request(server)
        .get('/api/needs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(lengthNeeds);
          done();
        });
    });
  });
});
describe('User', () => {
  let id;
  beforeEach((done) => { // Create a dummy user
    const user = {
      firstName: 'Buddy',
      lastName: 'oldPal',
      email: 'not@real.net',
      username: 'usernameduser',
      password: '876*&^uytUYThgf',
    };
    chai.request(server)
      .post('/api/users')
      .send(user)
      .then((response) => {
        id = response.body._id;
        done();
      });
  });
  /*
  * Test the /POST login route
  */
  describe('/POST user login', () => {
    it('it should log in correctly with the correct username/password', (done) => {
      const loginner = {
        username: 'usernameduser',
        password: '876*&^uytUYThgf',
      };
      chai.request(server)
        .post('/api/users/login')
        .send(loginner)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.username.should.equal('usernameduser');
          done();
        });
    });
  });
  afterEach((done) => {
    db.User
      .deleteById(id)
      .then((deletedCount) => {
        done();
      });
  });
});
