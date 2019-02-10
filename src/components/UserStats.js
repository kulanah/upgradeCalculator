import React, { Component } from 'react';
import StatEntry from 'components/StatEntry.js';

import 'css/UserStats.css';
class UserStats extends Component {
  constructor(props){
    super(props);

    this.state = {
      str:  4,
      dex: 110,
      luk: 400,
      watk: 110
    };
  }
  render() {
    return (
      <div className='UserStats'>
        <div className="StatsColumn">
          <span className='StatCell'>Str: </span>
          <span className='StatCell'>Dex: </span>
          <span className='StatCell'>Luk: </span>
          <span className='StatCell'>Watk: </span>
          <span className='StatCell'>Max Range:</span>
          <span className='StatCell StatBottomCell'>DPS: </span>
        </div>
        <div className="StatsColumn">
          <span className='StatHeader'>Unbuffed stats <br/>(MW only)</span>
          <StatEntry value={this.state.str}/>
          <StatEntry value={this.state.dex}/>
          <StatEntry value={this.state.luk}/>
          <StatEntry value={this.state.watk}/>
          <span className='StatCell'>101</span>
          <span className='StatCell StatBottomCell'>106</span>
        </div>

        <div className="StatsColumn FinalStatsColumn">
          <span className='StatHeader'>Buffed stats <br />(MW + atk pot)</span>
          <span className='StatCell'>111</span>
          <span className='StatCell'>112</span>
          <span className='StatCell'>113</span>
          <span className='StatCell'>114</span>
          <span className='StatCell'>115</span>
          <span className='StatCell StatBottomCell'>116</span>
        </div>
        
      </div>
    );
  }
}

export default UserStats;