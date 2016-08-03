require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../images/logo.png'

import Leaderboard from './Leaderboard';
import ExpandedUser from './ExpandedUser';

class AppComponent extends React.Component {

	constructor(props) {
		super(props);
		this.changeMiddleSection = ::this.changeMiddleSection;
		this.state = {
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
	      		<ExpandedUser user={this.state.selected} />
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
		fontFamily: '"Roboto Mono", monospace',
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
		maxWidth: 250
	},
	hero: {
		margin: '0 auto',
		maxWidth: 220
	}
}

export default AppComponent;
