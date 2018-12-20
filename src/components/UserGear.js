import React, { Component } from 'react';

import gear from 'data/UserGear.json';
import GearRow from './GearRow';
import 'css/UserGear.css';

class UserGear extends Component {
  constructor(props) {
    super(props);
    this.gear = [...gear];
  }
  
  render() {
    return (
      <div className='UserGear'>
        <div className='GearRow'>
          <span>Slot</span>
          <span>Str</span>
          <span>Dex</span>
          <span>Luck</span>
          <span>W.Atk</span>
          <span>Price</span>
        </div>
        
        {this.gear.map(equip => {
          return <GearRow key={equip.title} stats={equip} />
        })}

        
      </div>
    );
  }
}

export default UserGear;