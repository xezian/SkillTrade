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
	beforeEach((done) => { // Before each test we empty the database
		db.Skill.deleteMany({}).then(count => {
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
					res.body.length.should.be.eql(0);
				done();
			});
		});
  });
});