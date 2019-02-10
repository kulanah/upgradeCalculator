import React, { Component } from 'react';

import DecrementArrow from 'img/DownArrow.svg';
import IncrementArrow from 'img/UpArrow.svg';

class StatEntry extends Component {
  constructor(props){
    super(props);


    this.state = { ...props};

    this.input = this.input.bind(this);
    this.updateValue = this.updateValue.bind(this);

    console.log(this.state);
  }

  updateValue(newVal){
    this.setState({ value: newVal.target.value});

  }

  input(){
    let returnValue = (
      <span>
        <input type='number' onChange={this.updateValue} className='StatInput' value={this.state.value} />
      </span>
    )

    return returnValue;
  }


  render() {
    return (
      <span className='StatCell'>
        {this.input()}
        
      </span>
    );
  }
}

export default StatEntry;