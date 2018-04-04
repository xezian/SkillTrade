const ko = require("nekodb");

ko.connect({
  client: '',
  filepath: __dirname + '/db'
})

ko.models({
  User: {
    username: ko.String[40],
    password: ko.String[40],
  }.
  Need: {
    description: ko.String[]
  },
  Skill: {},
})

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
const NeedSchema = ko.Model('Need', {
  description: ko.String
})
  

// This creates our model from the above schema, using mongoose's model method

// Export the Need model
module.exports = Need;
