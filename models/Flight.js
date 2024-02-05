const mongoose = require('mongoose');
const {Schema,model}=mongoose

const destinationSchema = new Schema({
  airport0:{
    type: String,
    enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
    },
    arrival:{
       type: Date,
       required: true,
    }

})

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
    type: Date,
    default: "2023-01-30T19:30",
    required: true,
  },
  airport:{
    type: String,
     enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
   default: 'SAN',
   required: true
},
  destinations: {
    type:[destinationSchema],
    required: true,
  }
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
