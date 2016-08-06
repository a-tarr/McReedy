import React, { Component } from 'react';
import { connect } from 'react-redux';

var DoughnutChart = require('react-chartjs').Doughnut;

class ExpandedUser extends Component {

  constructor(props) {
    super(props);
  }

  showStats() {
  	var data = [];
  	if (!this.props.store.loading) {
  		this.props.store.userStats.map((user) => {
  			data.push({
  				value: user.data.game_stats.kpd,
  				label: user.data.battletag
  			})
  		});
  		return <DoughnutChart data={data} />
  	}
  }

  showAvgHealingStats() {
  	var data = [];
  	if (!this.props.store.loading) {
  		this.props.store.userStats.map((user) => {
  			data.push({
  				value: user.data.average_stats.healing_done_avg,
  				label: user.data.battletag
  			})
  		});
  		return <DoughnutChart data={data} />
  	}
  }

  render() {
    return (
      <div>
    		<div>{this.props.user}</div>
  			<div>
  				Kills per deaths
  				{this.showStats()}
  			</div>
        <div>
          Average healing per game
  		    {this.showAvgHealingStats()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return { store: state.store };
}

export default connect(mapStateToProps)(ExpandedUser);
