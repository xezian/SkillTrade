// require models
const db = require('../models');

// export functions to handle db interaction for skills
module.exports = {
  findAll: (req, res) => {
    console.log('skills findAll!');
    db.Skill
      .find({})
      .then(instances => res.json(instances))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: (req, res) => {
    console.log('skills findByCategory!');
    db.Skill
      .find({ category: req.params.category })
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    console.log('skills create!');
    db.Skill
      .create(req.body).save()
      .then(instance => res.json(instance))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log('skills update!');
    db.Skill
      .findById(req.params.id)
      .then((instance) => {
        const newInstance = Object.assign(instance, req.body);
        return newInstance.save();
      })
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    console.log('skills remove!');
    db.Skill
      .deleteById(req.params.id)
      .then(delCount => res.send(`${delCount} records deleted`))
      .catch(err => res.status(422).json(err));
  },
};
