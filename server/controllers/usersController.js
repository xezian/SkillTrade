// require bcrypt
const bcrypt = require('bcrypt');
// require models
const db = require('../models');
// require passport
const passport = require('passport');

// export functions to handle db interaction for users
module.exports = {
  login: (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) { return res.json({ message: info.message }); }
      return res.json(user);
    })(req, res, next);
  },
  create: (req, res) => {
    db.User.count({ username: req.body.username })
      .then((count) => {
        if (count === 0) {
          db.User.count({ email: req.body.email })
            .then((count2) => {
              if (count2 === 0) {
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
                  .catch(err => console.dir(err));
              } else {
                res.json('Sorry! That email is unavailable');
              }
            })
            .catch(err => res.status(422).json(err));
        } else {
          res.json('Sorry! That username is unavailable');
        }
      })
      .catch(err => res.status(422).json(err));
  },
};
