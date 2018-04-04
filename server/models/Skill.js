const ko = require("nekodb")
//be sure to co connect first or you'll get an error

var Skill = ko.Model('Skill', {
  name: ko.String,
  description: ko.String,
  $$indexes: {
    name: {
      unique: true
    }
  }
 });

module.exports = Skill
