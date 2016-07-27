
import React from 'react';
import { connect } from 'react-redux';
import { fetchUserStats } from '../actions';
import LinearProgress from 'material-ui/LinearProgress';

class User extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(fetchUserStats(this.props.user));
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
		const user2 = this.props.user;
		if (!this.isEmpty(this.props.data.userStats)) {
			console.log(this.props.data.userStats.find(x => x.user === user2));
		}
		var user = {};
		if (!this.isEmpty(user)) {
			return (
				<div>
				  	<div><b>{(user.battletag).split('-')[0]}</b></div>
				  	<div><b>Level {user.overall_stats.prestige}{user.overall_stats.level}</b></div>
				  	<br/>
				  	<div>Kills: {user.game_stats.eliminations}</div>
				  	<div>Deaths: {user.game_stats.deaths}</div>
				  	<br/>
				  	<div>Offensive Assists: {user.game_stats.offensive_assists}</div>
				  	<div>Defensive Assists: {user.game_stats.defensive_assists}</div>
				  	<div>Healing Done: {user.game_stats.healing_done}</div>
				  	<br/>
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

function mapStateToProps(state) {
	return { data: state.data };
}

export default connect(mapStateToProps)(User);