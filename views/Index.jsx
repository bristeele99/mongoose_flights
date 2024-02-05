const React = require('react');

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    
    return (
      <div>
        <nav>
          <a href="/flights/new">Add Flight</a><br/>
          <a href="/flights">All Flights</a>
        </nav>
        <ul>
          {flights.map((flight, i) => {
            const departsDate = new Date(flight.departs);
            const formattedDate = departsDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
            
             // Check if the flight date is in the past
             const isPast = departsDate < new Date();

             // Apply styles conditionally based on whether the date is in the past
             const listItemStyle = {
               color: isPast ? 'red' : 'black',  // Set font color to red for past dates
             };
            return (
              
              <li key={i} style={listItemStyle}>
                Airline: {flight.airline}<br />
                Flight Number: {flight.flightNo}<br />
                Departs Date: {flight.departs.toDateString()}<br/>
                Depart Time:{formattedDate} <br/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
