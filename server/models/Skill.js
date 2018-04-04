const ko = require("nekodb")
//be sure to co connect first or you'll get an error

const Skill = ko.models.Skill.create({
  name: ko.String[50],
  description: ko.String[50],
 });

module.exports = Skill
