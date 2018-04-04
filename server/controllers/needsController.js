// require models
const db = require('../models');

// export functions to handle db interaction for needs
module.exports = {
  findAll: (req, res) => {
    db.Need
      .find({})
      .then(instances => res.json(instances))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.Need
      .findById(req.params.id)
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Need
      .create(req.body).save()
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Need
      .findById(req.params.id)
      .then((instance) => {
        const newInstance = Object.assign(instance, req.body);
        return newInstance.save();
      })
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Need
      .deleteById(req.param.id)
      .then(delCount => res.send(`${delCount} records deleted`))
      .catch(err => res.status(422).json(err));
  },
};
