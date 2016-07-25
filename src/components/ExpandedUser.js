import React, { Component, PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';

class ExpandedUser extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<Paper>
    		<Subheader>{this.props.user}</Subheader>
  		</Paper>
    );
  }
}

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
]

export default ExpandedUser;
