const ko = require('nekodb');

const Skill = ko.Model('Skill', {
  name: ko.String,
  category: ko.String,
  description: ko.String,
  img: ko.String,
  $$indexes: {
    name: {
      unique: false,
    },
    category: {
      unique: false,
    },
    description: {
      unique: false,
    },
  },
});

module.exports = Skill;
