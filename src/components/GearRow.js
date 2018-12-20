import React, { Component } from 'react';

class GearRow extends Component {
  constructor(props) {
    super(props);
    
    console.log(props);
  }
  
  render() {
    return (
      <div className='GearRow'>
        <span className='GearBox'>{this.props.stats.title} </span>
        <span className='GearBox'>{this.props.stats.str} </span>
        <span className='GearBox'>{this.props.stats.dex} </span>
        <span className='GearBox'>{this.props.stats.luk} </span>
        <span className='GearBox'>{this.props.stats.watk} </span>
        <span className='GearBox RightBorder'>{this.props.stats.price} </span>
        
      </div>
    );
  }
}

export default GearRow;