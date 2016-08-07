'use strict';
import React from 'react';
import style from '../styles/App.css';
import Stats from './Stats';

class Main extends React.Component {

  render() {
    return (
      <section>
        <header className={style.header}>HIGHNOON</header>
        <section className={style.body}>
          <div className={style.row}>
            <div className={style.col}><Stats section='overall_stats' stat='level' /></div>
            <div className={style.col}><Stats section='game_stats' stat='kpd' /></div>
            <div className={style.col}><Stats section='average_stats' stat='damage_done_avg' /></div>
            <div className={style.col}><Stats section='average_stats' stat='healing_done_avg' /></div>
            <div className={style.col}><Stats section='game_stats' stat='time_played' /></div>
          </div>
          <div className={style.row}>
            <div className={style.col}><Stats section='average_stats' stat='deaths_avg' /></div>
            <div className={style.col}><Stats section='average_stats' stat='melee_final_blows_avg' /></div>
            <div className={style.col}><Stats section='average_stats' stat='eliminations_avg' /></div>
            <div className={style.col}><Stats section='average_stats' stat='final_blows_avg' /></div>
            <div className={style.col}><Stats section='game_stats' stat='healing_done_most_in_game' /></div>
          </div>
        </section>
      </section>
    );
  }

}

export default Main;
