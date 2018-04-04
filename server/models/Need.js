const ko = require('nekodb')

//be sure to co connect first or you'll get an error

const Need = ko.models.Need.create({
  username: ko.String[50],
  password: ko.String[50],
  email: ko.String[50],
  //reference to Need and Skill?

 });

module.exports = Need
