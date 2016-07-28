import React, { Component } from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
	return { store: state.store };
}

export default connect(mapStateToProps)(ExpandedUser);
