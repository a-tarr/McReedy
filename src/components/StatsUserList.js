'use strict';
import React from 'react';

class StatsUserList extends React.Component {

  render() {
    console.log(this.props.list);
    return (
      <div>
        {this.props.list.map(user => {
          return <div>{user.user} {user.value}</div>
        })}
      </div>
    );
  }
}

StatsUserList.defaultProps = {
  list: []
}

export default StatsUserList;
