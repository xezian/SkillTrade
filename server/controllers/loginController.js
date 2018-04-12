// require bcrypt
const bcrypt = require('bcrypt');
// require models
const db = require('../models');
// require passport
const passport = require('passport');
// require passport-local
const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  passport.use(new LocalStrategy((username, password, done) => {
    console.log('yo');
    console.log(username);
    db.User
      .findOne({ username })
      .then((user) => {
        // does not exist
        if (user == null) {
          console.log('user == null');
          return done(null, false, { message: 'No Such User' });
        }
        // if exists check password
        // hash with user obj salt param
        const hashWord = bcrypt.hashSync(password, user.salt);
        // match hashWords
        if (user.hash === hashWord) {
          return done(null, user);
        }
        return done(null, false, { message: 'Wrong Password' });
      })
      .catch(err => console.error(err));
  }));
  // this part handles passport user serialization and deserialization
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    db.User.findById(id)
      .then((user) => {
        if (user == null) {
          done(new Error('Wrong user id.'));
        }
        done(null, user);
      });
  });
};
