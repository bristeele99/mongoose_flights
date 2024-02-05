
const express = require('express');
require('dotenv').config();
const React = require('react');
const app = express();
const mongoose = require('mongoose');
const Flight = require('./models/Flight.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


console.log('MONGO_URI:', process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);


mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.error(error));


app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

// Seed Route
app.get('/flights/seed', (req, res) => {
  Flight.deleteMany({})
    .then(() => res.redirect('/flights'))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
});

// Index
app.get('/flights', (req, res) => {
  Flight.find({})
    .sort({departs: 1}).exec()
    .then((allFlights) => {
      res.render('Index', { flights: allFlights });
    })
    .catch((err) => console.error(err));
});

// New
app.get('/flights/new', (req, res) => {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  const departAirport= newFlight.airport
  
res.render('New', {departsDate, departAirport});
});

// Show
app.get('/flights/:id', (req, res) =>  {
  //findOne returns the first object that matches _id: req.params.id  
  Flight.findOne({ _id: req.params.id}).then((foundFlight)=>{
      res.render('Show', {
          flight: foundFlight
  });
  })
  .catch(err => console.error(err))
});

 //Edit
 app.get('/flights/:id/edit', (req, res) => {
  Flight.findOne({ _id: req.params.id })
    .then(foundFlight => res.render('Edit',
      {
        flight: foundFlight
      }))
    .catch(err => console.error(err));
})



//Update

app.put('/flights/:id', (req, res) => {
  
  Flight.updateOne({ _id: req.params.id }, 
    { $push: { destinations: req.body } })
    .then(updateInfo => {
      res.redirect(`/flights/${req.params.id}`)
    })
    .catch(err => console.error(err));
})


// POST route for handling form submission
app.post('/flights', (req, res) => {
   
  Flight.create(req.body)
    .then((createdFlight) => {
      res.redirect('/flights')
    })
    .catch((err) => console.error(err));
    
});

app.listen(3000, () => {
  console.log('listening');
});
