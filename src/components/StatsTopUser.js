'use strict';
import React from 'react';
import style from '../styles/StatsTopUser.css';

class StatsTopUser extends React.Component {

  render() {
    return (
      <div className={style.container}>
        <img className={style.img} src={this.props.user.avatar} />
        <div className={style.subcontainer}>
          <div className={style.text}>{this.props.user.user}</div>
          <div className={style.text}><b>{this.props.user.value}</b></div>
        </div>
      </div>
    );
  }

}

StatsTopUser.defaultProps = {
  user: {}
}

export default StatsTopUser;
