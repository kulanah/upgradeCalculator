import React, { Component } from 'react';
import Tab from 'components/Tab';

import WelcomeContent from 'components/tabbedContent/WelcomeContent'
import UserContent from 'components/tabbedContent/UserContent'
import FillerContent from 'components/tabbedContent/FillerContent'

class Tabs extends Component {
  constructor(props) {
    super(props);
    
    this.selectedTab = props.selected || 0;
    this.tabTitles = ['Welcome', 'User Stats', 'Gloves', 'Shoes'];
    this.tabs = [
      <Tab text='Welcome' content={<WelcomeContent />} index='0'/>,
      <Tab text='User Stats' content={<UserContent/>} index='1'/>,
      <Tab text='Shoes' content={<FillerContent/>} index='2'/>,
      <Tab text='Gloves' content={<FillerContent/>} index='3'/>,
    ];
  };

  render() {
    return (
      <div className='TabsWindow'>
        {this.tabs.map(tab => {
          return tab.props.text;
        })}

        <div className="TabbedContent">
          {this.tabs[this.selectedTab]}
        </div>
      </div>
    );
  }
}


export default Tabs;