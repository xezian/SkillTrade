const ko = require('nekodb');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/skillShare';
ko.connect({
  client: 'mongodb',
  url: MONGODB_URI,
});
module.exports = {
  User: require("./User"),
  Skill: require("./Skill"),
  Need: require("./Need"),
};
