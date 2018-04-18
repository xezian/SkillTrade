const ko = require('nekodb');

const Skill = ko.Model('Skill', {
  name: ko.String,
  category: ko.String,
  description: ko.String,
  img: ko.String,
  user: ko.models.User,
  $$indexes: {
    user: {
      unique: false,
    },
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
