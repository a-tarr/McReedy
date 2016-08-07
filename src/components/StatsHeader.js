'use strict';
import React from 'react';
import style from '../styles/StatsHeader.css'

class StatsHeader extends React.Component {

  parseText(text) {
    return text.replace(/[_-]/g, ' ');
  }

  render() {
    return (
      <div className={style.header}>{this.parseText(this.props.stat)}</div>
    );
  }

}

export default StatsHeader;
