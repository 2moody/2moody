const mongoose = require("mongoose");

// schema is an outline of what each user object will look like (mandatory). 
const userSchema = new mongoose.Schema({
  // _id: Number, // should be unique to each user
  name: String,
  email: String,
  password: String
});

// create model using name and declared schema above as arguments
const userModel = mongoose.model('userCollection', userSchema)

module.exports = userModel;