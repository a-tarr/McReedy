require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Leaderboard from './Leaderboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserDva from './UserDva'
import UserHanzo from './UserHanzo'
import logo from '../src/images/logo.png'

class AppComponent extends React.Component {
  render() {
    return (
    	<MuiThemeProvider>
		    <div style={styles.index}>
		    	<img style={styles.img} src={logo}/>
		      <div style={styles.user}>
		    		<Leaderboard list={users}/>
	      	</div>
	      	<div style={styles.hero}>
		      	<UserDva user='bapplebo-1602'/>
		      	<UserDva user='AdamReyy-1354'/>
		      	<UserDva user='LotsOfLurv-6305'/>
		      	<UserDva user='GotMelk-1385'/>
		      	<UserDva user='MrSushii-1937'/>
		      	<UserDva user='Phatlipz-1655'/>      	

		      	<UserHanzo user='bapplebo-1602'/>
		      	<UserHanzo user='AdamReyy-1354'/>
		      	<UserHanzo user='LotsOfLurv-6305'/>
		      	<UserHanzo user='GotMelk-1385'/>
		      	<UserHanzo user='MrSushii-1937'/>
		      	<UserHanzo user='Phatlipz-1655'/>
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
	user: {
		margin: '0 auto',
		float: 'left',
		maxWidth: 200
	},
	hero: {
		margin: '0 auto',
		maxWidth: 220
	}
}
AppComponent.defaultProps = {
};

export default AppComponent;
