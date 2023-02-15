const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  clientid: {
    type: String,
    required: true
  },
  servicesid: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  slot: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
