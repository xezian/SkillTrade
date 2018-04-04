const ko = require('nekodb')

//be sure to co connect first or you'll get an error

const Need = ko.Model('Need', {
  username: ko.String,
  password: ko.String,
  email: ko.String,
  //reference to Need and Skill?
 });

module.exports = Need;
