import React, { Component } from 'react';

import 'css/UserStats.css';
class UserStats extends Component {
  render() {
    return (
      <div className='UserStats'>
        <div className="StatsColumn">
          <span></span>
          <span>Str: </span>
          <span>Dex: </span>
          <span>Luk: </span>
          <span>Watk: </span>
          <span>Max Range:</span>
          <span>DPS: </span>
        </div>
        <div className="StatsColumn">
          <span>Unbuffed stats (MW only)</span>
          <span>101</span>
          <span>102</span>
          <span>103</span>
          <span>104</span>
          <span>105</span>
          <span>106</span>
        </div>

        <div className="StatsColumn">
          <span>Buffed stats (MW + atk pot)</span>
          <span>111</span>
          <span>112</span>
          <span>113</span>
          <span>114</span>
          <span>115</span>
          <span>116</span>
        </div>
        
      </div>
    );
  }
}

export default UserStats;