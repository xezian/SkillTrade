// require models
const db = require('../models');

// export functions to handle db interaction for needs
module.exports = {
  findAll: (req, res) => {
    console.log('needs findAll!');
    db.Need
      .find({})
      .then(instances => res.json(instances))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: (req, res) => {
    console.log('needs findByCategory!');
    db.Need
      .find({ category: req.params.category })
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log('needs create!');
    db.Need
      .create(req.body).save()
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log('needs update!');
    db.Need
      .findById(req.params.id)
      .then((instance) => {
        const newInstance = Object.assign(instance, req.body);
        return newInstance.save();
      })
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    console.log('needs remove!');
    db.Need
      .deleteById(req.params.id)
      .then(delCount => res.send(`${delCount} records deleted`))
      .catch(err => res.status(422).json(err));
  },
};
