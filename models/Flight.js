const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
  },
  flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999,
  },
  departs:{
    type: datetime-local,
    default: "2023-01-30T19:30",
    required: true,
  },
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
