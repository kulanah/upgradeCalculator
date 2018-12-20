import React, { Component } from 'react';
import Tabs from './Tabs';
import UserTab from './UserTab';
import WelcomeTab from './WelcomeTab';

class TabWindow extends Component {
  constructor(props) {
    super(props);
    
  }
  

  showSelectedWindow(){

  }

  render() {
    return (
      <div>
        <Tabs />
        {this.showSelectedWindow}        

      </div>
    );
  }
}

export default TabWindow;