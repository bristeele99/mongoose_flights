
const React = require('react');

//

class Edit extends React.Component {
  render() {
    return (
    
        <form action={`/flights/${this.props.flight._id}?_method=PUT`} method="POST">
          Destination Airport:  <select name="airport0" >

          <option value="AUS">AUS</option>
          <option value="DAL">DAL</option>
          <option value="LAX">LAX</option>
          <option value="SAN">SAN</option>
          <option value="SEA">SEA</option>

           </select><br/><br/>
          Arrival Time: <input
            type="datetime-local"
            name="arrival"
          /><br />
          
          <input type="submit" value="Add Destination"/>
        </form>
      
    )
  }
}

module.exports = Edit;