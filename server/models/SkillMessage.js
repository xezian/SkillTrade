const ko = require('nekodb');

const SkillMessage = ko.Model('SkillMessage', {
  skillRef: ko.models.Skill,
  body: ko.String,
  sender: ko.models.User,
  recipient: ko.models.User,
  $$indexes: {
    sender: {
      unique: false,
    },
    recipient: {
      unique: false,
    },
  },
});

module.exports = SkillMessage;
