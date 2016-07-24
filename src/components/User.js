
import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class User extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	fetchData() {
		fetch('https://crossorigin.me/https://owapi.net/api/v2/u/' + this.props.user +'/stats/general', {
			method: 'get'
		}).then(response => response.json())
		  .then(data => {
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
				<div>
				  	<div><b>{(user.battletag).split('-')[0]}</b></div>
				  	<div>Kills: {user.game_stats.eliminations}</div>
				  	<div>Deaths: {user.game_stats.deaths}</div>
				  	<div>Time played: {user.game_stats.time_played} hours</div>
				</div>
			);
		}	else {
			return (
				<div>
				  	<div><LinearProgress style={{height: '50px', width: '150'}} mode="indeterminate" /></div>
				</div>
			);
		}
	}
}
export default User;