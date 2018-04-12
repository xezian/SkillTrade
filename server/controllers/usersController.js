// require bcrypt
const bcrypt = require('bcrypt');
// require models
const db = require('../models');
// require passport
const passport = require('passport');

// export functions to handle db interaction for users
module.exports = {
  checkUsername: (req, res) => {
    db.User.count({ name: req.params.name })
      .then(count => res.json(count))
      .catch(err => res.status(422).json(err));
  },
  login: (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) { return res.json({ message: info.message }); }
      return res.json(user);
    })(req, res, next);
  },
  create: (req, res) => {
    console.log('whoopie!');
    // make salt
    const salt = bcrypt.genSaltSync(10);
    // get the data we need to encrypt the password
    const password = req.body.password;
    const hashWord = bcrypt.hashSync(password, salt);
    // now make the nooUser Object we'll send to the db
    const nooUser = {
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      hash: hashWord,
      salt: salt,
    };
    db.User
      .create(nooUser).save()
      .then(instance => res.json(instance))
      .catch(err => console.error(err));
  },
};
