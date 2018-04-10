// require bcrypt
const bcrypt = require('bcrypt');
// require models
const db = require('../models');

// export functions to handle db interaction for users
module.exports = {
  login: (req, res) => {
    console.log('user login!');
    db.User
      .findOne({ username: req.params.username })
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log('whoopie!');
    // make salt
    const salt = bcrypt.genSaltSync(10);
    console.log(salt);
    console.log(req.body.username);
    // get the data we need to encrypt the password
    const password = req.body.password;
    const hashWord = bcrypt.hashSync(password, salt);
    // now make the nooUser Object we'll send to the db
    console.log(hashWord);
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
