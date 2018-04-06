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
    console.log('user create!');
    db.User
      .create(req.body)
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
};
