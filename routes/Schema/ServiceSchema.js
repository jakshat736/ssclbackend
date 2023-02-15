const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  servicename: {
    type: String,
    required: true
  },
  servicedetails: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  serviceimage: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Service', serviceSchema);
