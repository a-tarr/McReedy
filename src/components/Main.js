require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Leaderboard from './Leaderboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserDva from './UserDva'
import UserHanzo from './UserHanzo'
import logo from '../images/logo.png'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'

class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.changeMiddleSection = ::this.changeMiddleSection;
		this.state ={
			selected: 'Leaderboard'
		}
	}

	changeMiddleSection(user) {
		this.setState({selected: user});
	}

  render() {
    return (
    	<MuiThemeProvider>
		    <div style={styles.index}>
		    	<img style={styles.img} src={logo}/>
		      <div style={styles.leaderboard}>
		    		<Leaderboard list={users} click={this.changeMiddleSection}/>
	      	</div>
	      	<div style={styles.middle}>
		      	<Paper>
		      		<Subheader>{this.state.selected}</Subheader>
			      </Paper>
		      </div>
		    </div>
	    </MuiThemeProvider>
    );
  }
}

var users = [
	'bapplebo-1602',
	'AdamReyy-1354',
	'LotsOfLurv-6305',
	'GotMelk-1385',
	'MrSushii-1937',
	'Phatlipz-1655'
];

var styles ={
	index: {
		fontFamily: "'Roboto Mono', monospace'",
		margin: '0 auto',
		maxWidth: 900
	},
	img: {
		display: 'block',
		margin: '0 auto',
		width: 500,
		height: 'auto'
	},
	middle: {
		width: 650,
		float: 'right',
		margin: '0 auto'
	},
	leaderboard: {
		margin: '0 auto',
		float: 'left',
		maxWidth: 200
	},
	hero: {
		margin: '0 auto',
		maxWidth: 220
	}
}

export default AppComponent;
