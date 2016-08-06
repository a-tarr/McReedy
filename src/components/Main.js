'use strict';
import React from 'react';
import style from '../styles/App.css';
import SelectionContainer from './SelectionContainer';
import StatsChart from './StatsChart';

class Main extends React.Component {

  render() {
    return (
      <section>
        <header className={style.header}>HIGHNOON</header>
        <section className={style.body}>
          <SelectionContainer />
          <div className={style.row}>
            <div className={style.col}><StatsChart /></div>
            <div className={style.col}>a </div>
            <div className={style.col}></div>
            <div className={style.col}></div>
            <div className={style.col}></div>
          </div>
        </section>
      </section>
    );
  }

}

export default Main;
