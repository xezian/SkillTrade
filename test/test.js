// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const ko = require('nekodb');
const db = require('../server/models');


// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/bin/www');

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
// describe('User', () => {
//   let length = 0;
//   beforeEach((done) => { // Before each test we empty the database
//     chai.request(server)
//       .put('/api/users')

//   });
//   /*
//   * Test the /POST route
//   */
//   describe('/POST user login', () => {
//     it('it should GET all the users', (done) => {
//       chai.request(server)
//         .post('/api/users/login')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           res.body.length.should.be.eql(length);
//           done();
//         });
//     });
//   });
// });
