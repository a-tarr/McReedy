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
        this.getTotalData = this.getTotalData.bind(this);
        this.state = {
        	totalKills: 0,
        	totalDeaths: 0
        }
    }

    getTotalData(totals) {
    	this.setState((previousState) =>
    		({ totalKills: previousState.totalKills + totals.eliminations,
    			 totalDeaths: previousState.totalDeaths + totals.deaths
    	  }));
    }

    loadUsers() {
    	return this.props.list.map(user => {
  				return <ListItem style={style.user} onClick={() => this.props.click(user)}><User user={user} onLoad={this.getTotalData}/></ListItem>
			});
    }

    render() {
      return (
      	<Paper>
	      	<List>
	        	<Subheader>Leaderboard</Subheader>
	      		{this.loadUsers()}
		    		<ListItem>
		    			<b>Total kills:</b> {this.state.totalKills} <br/>
	    				<b>Total deaths:</b> {this.state.totalDeaths}
	    			</ListItem>
	    		</List>
    		</Paper>
			);
    }
}

const style = {
	user: {
		WebkitAppearance: 'none'
	}
}

export default Radium(Leaderboard);
