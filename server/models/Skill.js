const ko = require("nekodb")
//be sure to co connect first or you'll get an error

const Skill = ko.Model('Skill', {
  name: ko.String[50],
  description: ko.String[50],
 });

module.exports = Skill
