const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  emailid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
