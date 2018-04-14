const ko = require('nekodb');

const Need = ko.Model('Need', {
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

module.exports = Need;
