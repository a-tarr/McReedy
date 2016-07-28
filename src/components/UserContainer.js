
import React from 'react';
import { connect } from 'react-redux';
import { fetchUserStats } from '../actions';
import User from './User'

class UserContainer extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchUserStats(this.props.user));
	}

	getUserStats() {
		var userStats = this.props.store.userStats;
		if (userStats != undefined) {
			return userStats.find(data => data.user === this.props.user);
		}
	}

	render() {
		return <User user={this.getUserStats()} />
	}
}

function mapStateToProps(state) {
	return { store: state.store };
}

export default connect(mapStateToProps)(UserContainer);