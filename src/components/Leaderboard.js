import React, { Component, PropTypes } from 'react';
import UserContainer from './UserContainer';

class Leaderboard extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.getTotalData = this.getTotalData.bind(this);
        this.state = {
            totalKills: 0,
            totalDeaths: 0
        }
    }

    getTotalData(totals) {
      this.setState((previousState) =>
          ({ totalKills: previousState.totalKills + totals.eliminations,
             totalDeaths: previousState.totalDeaths + totals.deaths
        }));
    }

    loadUsers() {
      return this.props.list.map((user, index) => {
        return (
          <div key={index} style={style.user} onClick={() => this.props.click(user)}>
            <UserContainer user={user} />
          </div>
        );
    });
    }

    render() {
      return (
        <div>
          <div>Leaderboard</div>
          {this.loadUsers()}
          <div>
            <b>Total kills:</b> {this.state.totalKills} <br/>
            <b>Total deaths:</b> {this.state.totalDeaths}
          </div>
        </div>
      );
    }
}

const style = {
    user: {
        WebkitAppearance: 'none'
    }
}

export default Leaderboard;
