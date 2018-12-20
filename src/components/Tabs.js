import React, { Component } from 'react';
import WelcomeTab from './WelcomeTab';
import UserTab from './UserTab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    
    this.selectedTab = props.selected || 0;
    this.tabTitles = ['Welcome', 'User Stats']
    this.tabs = [<WelcomeTab />, <UserTab />]
  }

  render() {
    return (
      <div className='TabsWindow'>
        {this.tabTitles.map(tab => {
          return <span className='Tab'>{tab}</span>
        })}
        
      </div>
    );
  }
}


export default Tabs;