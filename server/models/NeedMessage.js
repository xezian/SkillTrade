const ko = require('nekodb');

const NeedMessage = ko.Model('NeedMessage', {
  needRef: ko.models.Need,
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

module.exports = NeedMessage;
