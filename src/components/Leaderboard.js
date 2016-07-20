import React, { Component, PropTypes } from 'react';
import User from './User';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import Radium from 'radium';

class Leaderboard extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    loadUsers() {
    	return this.props.list.map(user => {
  				return <ListItem style={style.user}><User user={user}/></ListItem>
			});
    }

    render() {
      return (
      	<Paper>
	      	<List>
	        	<Subheader>Leaderboard</Subheader>
	      		{this.loadUsers()}
	    		</List>
    		</Paper>
			);
    }
}

const style = {
	user: {
		webkitAppearance: 'none'
	}
}

export default Radium(Leaderboard);
