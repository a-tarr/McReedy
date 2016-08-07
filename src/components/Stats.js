'use strict';
import React from 'react';
import { connect } from 'react-redux';
import StatsHeader from './StatsHeader';
import StatsTopUser from './StatsTopUser';
import StatsUserList from './StatsUserList';

class Stats extends React.Component {

  getStats() {
    var data = [];
    if (!this.props.store.loading) {
      this.props.store.userStats.map((user) => {
        data.push({
          user: user.data.battletag,
          avatar: user.data.overall_stats.avatar,
          value: user.data[this.props.section][this.props.stat]
        })
      });
    }
    return data;
  }

  getTopUser(stats) {
    var res = Math.max.apply(Math,stats.map(o => {return o.value}));
    var user = stats.find(user => {return user.value == res; });
    return user;
  }

  getUserList(stats) {
    var stats = stats.filter(user => { return user.user != this.getTopUser(stats).user});
    return stats.sort((a, b) => {
      if (a.value > b.value) {
        return -1;
      }
      if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
  }

  render() {
    return (
      <div>
        <StatsHeader stat={this.props.stat} />
        <StatsTopUser user={this.getTopUser(this.getStats())} />
        <StatsUserList list={this.getUserList(this.getStats())} />
      </div>
    );
  }

}

function mapStateToProps(state) {
	return { store: state.store };
}

export default connect(mapStateToProps)(Stats);
