const React = require('react');

class Show extends React.Component {
  render() {
    const flight = this.props.flight
   
    return (
    <div>
      <h1> Airline Details </h1>
         {flight.airline} {flight.flightNo} 
         <br/>Depart time: {flight.departs.toISOString().slice(0, 10)}{' '}{flight.departs.toISOString().slice(11,16)} 
         <br/>Depart airport: {flight.airport}
        <br/> 
        {flight.destinations.length > 0 ? (
    <div>
      <h2>Destination Details:</h2>
      <p>Destination Airport: {flight.destinations[0].airport0}</p>
      <p>Arrival time: {flight.destinations[0].arrival.toISOString().slice(0, 10)}{' '} {flight.destinations[0].arrival.toISOString().slice(11, 16)}</p>
    </div>) 
    : (<a href={`/flights/${flight._id}/edit`}>Add Destination Details</a>)}
  <div>
    
    <a href="/flights">Back to the main</a></div>

    </div>
    );
  }
}

module.exports = Show;