const ko = require("nekodb")

const User = ko.Model('User', {
  username: ko.String,
  password: ko.String,
  email: ko.String,

})

module.exports = User
