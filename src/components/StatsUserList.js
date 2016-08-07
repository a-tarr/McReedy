'use strict';
import React from 'react';
import style from '../styles/StatsUserList.css'

class StatsUserList extends React.Component {

  render() {
    return (
      <section>
      {this.props.list.map(user => {
        return (
          <div className={style.container}>
            <div className={style.user}>{user.user}</div>
            <div><b>{user.value}</b></div>
          </div>
        );
      })}
      </section>
    );
  }
}

StatsUserList.defaultProps = {
  list: []
}

export default StatsUserList;
