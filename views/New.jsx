
// New.jsx
const React = require('react');

class New extends React.Component {
  render() {
   
    // let departsDateObj = new Date(this.props.departs);
    // let localDate = new Date(departsDateObj.getTime() - (departsDateObj.getTimezoneOffset() * 60000));
    // console.log('localDate',localDate)
    // Use toISOString to get the date in the correct format
    // let formattedDate = departsDateObj.toISOString().slice(0, 16);
  // Ensure departsDate is a Date object. This could be passed down as a prop.
    // If this.props.departsDate is already in the correct format and timezone,
    // you might just need to format it correctly.
    let departsDateObj = new Date(this.props.departs);

    // // Convert to local timezone manually by adjusting with the timezone offset
    let localDate = new Date(departsDateObj.getTime() - (departsDateObj.getTimezoneOffset() * 60000));

    // // Format to YYYY-MM-DDTHH:MM
    // // Ensuring to pad single digits where necessary
    const pad = num => num < 10 ? '0' + num : num;
    let formattedDate = localDate.getFullYear() + '-' +
      pad(localDate.getMonth() + 1) + '-' +
      pad(localDate.getDate()) + 'T' +
      pad(localDate.getHours()) + ':' +
      pad(localDate.getMinutes());

    const airlines = ['American', 'Southwest', 'United'];
    return (
      <div>
        <h1>Add Flight</h1>
        <form action="/flights" method="POST">
        <select name="airline">
              {airlines.map((airline, index) => (
                <option key={index} value={airline}>
                  {airline}
                </option>
              ))}
            </select>
          <label>
            Departure Date: <input type="datetime-local" name="departs" defaultValue={this.props.departs}/>
          </label><br />
          <label>
            Flight Number: <input type="number" name="flightNo" />
          </label><br />

          <select name="airport"  defaultValue={this.props.departAirport} style={{ width: '100%', padding: '5px', marginBottom: '10px' }} >
          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>

          {this.props.departAirport}</select><br/><br/>
          <input type="submit" value="Create Flight" />
        </form>
      </div>
    );
  }
}

module.exports = New;
