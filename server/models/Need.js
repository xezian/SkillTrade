var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NeedSchema = new Schema({
  description: String,
  completedByDate: Date,
});

// This creates our model from the above schema, using mongoose's model method
var Need = mongoose.model("Need", UserSchema);

// Export the Need model
module.exports = Need;
