const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name : String,
  email: {
    type: String,
    unique: true // `email` must be unique
  },
  isPromoted:{
    type : Boolean,
    default: null
  }
});

const user = mongoose.model("user",userSchema);
module.exports = user;