import React, { Component } from 'react';

import UserStats from 'components/UserStats.js'
import UserGear from 'components/UserGear.js'

class UserContent extends Component {
  render() {
    return (
      <div className='UserContent'>
        <UserStats />
        <UserGear />
      </div>
    );
  }
}

export default UserContent;