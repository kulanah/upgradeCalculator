import React, { Component, useRef } from 'react';
import Tab from 'components/Tab';

import WelcomeContent from 'components/tabbedContent/WelcomeContent'
import UserContent from 'components/tabbedContent/UserContent'
import FillerContent from 'components/tabbedContent/FillerContent'

import 'css/Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.selectTab = this.selectTab.bind(this);

    this.state = {
      selectedTab : props.selected || 0,
      tabTitles : ['Welcome', 'User Stats', 'Gloves', 'Shoes'],
      tabs : [
        <Tab text='Welcome' index='0' tabClick={this.selectTab} key='1'/>,
        <Tab text='User Stats' index='1' tabClick={this.selectTab} key='2'/>,
        <Tab text='Shoes' index='2' tabClick={this.selectTab} key='3'/>,
        <Tab text='Gloves' index='3' tabClick={this.selectTab} key='4'/>,
      ],
      tabsContent: [ <WelcomeContent />, <UserContent />, <FillerContent />, <FillerContent />
      ]
    }
  };

  selectTab(index) {
    this.setState({selectedTab: index});
  }

  render() {
    return (
      <div className='TabsWindow'>
        <div className='Tabs'>
          {this.state.tabs.map(tab => {
            return tab;
          })}
        </div>

        <div className="TabbedContent">
          {this.state.tabsContent[this.state.selectedTab]}
        </div>
      </div>
    );
  }
}


export default Tabs;