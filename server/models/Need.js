const ko = require('nekodb');

const Need = ko.Model('Need', {
  title: ko.String,
  category: ko.String,
  description: ko.String,
  img: ko.String,
  user: ko.models.User,
  $$indexes: {
    user: {
      unique: false,
    },
    title: {
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

module.exports = Need;
