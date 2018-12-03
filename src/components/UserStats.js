import React, { Component } from 'react';

import 'css/UserStats.css';
class UserStats extends Component {
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
          <span className='StatCell'>101</span>
          <span className='StatCell'>102</span>
          <span className='StatCell'>103</span>
          <span className='StatCell'>104</span>
          <span className='StatCell'>105</span>
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