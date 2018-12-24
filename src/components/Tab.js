import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <span className='Tab'>
        {this.props.content}
        
      </span>
    );
  }
}

export default Tab;