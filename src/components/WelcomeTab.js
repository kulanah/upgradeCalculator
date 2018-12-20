import React, { Component } from 'react';

class WelcomeTab extends Component {
  constructor(props) {
    super(props);
    this.name = "Welcome";

    this.getName = this.getName.bind(this);
  }

  getName(){
    return this.name;
  }
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default WelcomeTab;