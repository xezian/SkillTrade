const ko = require('nekodb');

const Skill = ko.Model('Skill', {
  name: ko.String,
  category: ko.String,
  description: ko.String,
  // $$indexes: {
  //   name: {
  //     unique: true,
  //   },
  // },
});

module.exports = Skill;
