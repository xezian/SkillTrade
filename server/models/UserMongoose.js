
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  need: {
    type: Schema.Types.ObjectId,
    ref: "Need"
  },
  skill: {
    type: Schema.Types.ObjectId,
    ref: "Skill"
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the Note model
module.exports = User;
