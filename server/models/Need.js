const ko = require('nekodb');

const Need = ko.Model('Need', {
  name: ko.String,
  category: ko.String,
  description: ko.String,
  img: ko.String,
  // $$indexes: {
  //   id: {
  //     unique: true,
  //   },
  // },
});

module.exports = Need;
