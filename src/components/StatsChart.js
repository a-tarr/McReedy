'use strict';
import React from 'react';
import { connect } from 'react-redux';

var DoughnutChart = require('react-chartjs').Doughnut;

class StatsChart extends React.Component {

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
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.showStats()}
        Kills per deaths
      </div>
    );
  }

}

function mapStateToProps(state) {
	return { store: state.store };
}

export default connect(mapStateToProps)(StatsChart);
