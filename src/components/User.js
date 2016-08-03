import React from 'react';

class User extends React.Component {
	render() {
		var user = this.props.user;
		if (user != undefined) {
			user = user.data;
		}
		if (user != undefined) {
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
			)
		} else {
			return  <div>Loading...</div>
		}
	}
}


export default User;
