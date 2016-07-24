import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import Spinner from 'react-spinkit';

class UserDva extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	fetchData() {
		fetch('https://crossorigin.me/https://owapi.net/api/v2/u/' + this.props.user +'/heroes/dva', { 
			method: 'get'
		}).then(response => response.json())
		  .then(data => {
		  	console.log(data);
		  	this.setState({data: data});
	    })
	    .catch(err => {  
		    console.log('Fetch Error :-S', err);  
		  });
	}

	componentDidMount() {
		this.fetchData();
	}

	isEmpty(object) {
	  for(var key in object) {
	    if(object.hasOwnProperty(key)) {
	      return false;
	    }
	  }
	  return true;
	}

	render() {
		var user = this.state.data;
		if (!this.isEmpty(user)) {
			return (
				<div style={styles.user}>
				  	<div><b>{(user.battletag).split("-")[0]} stats for D.VA</b></div>
				  	<div>Kills: {user.general_stats.eliminations}</div>
				  	<div>Deaths: {user.general_stats.deaths}</div>
				  	<div>Time played: {user.general_stats.time_played}</div>
				</div>
			);
		}	else {
			return (
				<div style={styles.user}>
				  	<div><Spinner style={{margin: 'auto', width: 30}} spinnerName='wave'/></div>
				</div>
			);
		}	
	}
}

var styles = {
	user: {
		boxShadow: '0 8px 6px -6px #777',
		border: '1px solid black',
		borderRadius: 2,
		color: '#717171',
		padding: '5px 10px',
		marginTop: 7,
		marginBottom: 7
	}
}

export default UserDva;
