import React, { Component } from 'react';
import Tab from 'components/Tab';

import WelcomeContent from 'components/tabbedContent/WelcomeContent'
import UserContent from 'components/tabbedContent/UserContent'
import FillerContent from 'components/tabbedContent/FillerContent'

import 'css/Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.selectTab = this.selectTab.bind(this);
    this.deselectTab = this.deselectTab.bind(this);

    this.state = {
      selectedTab : props.selected || 0,
      tabTitles : ['Welcome', 'User Stats', 'Gloves', 'Shoes'],
      tabs : [
        {text:'Welcome', index:0, tabClick: this.selectTab, key:1, selected:true},
        {text:'User Stats', index:1, tabClick:this.selectTab, key:2, selected:false},
        {text:'Shoes', index:2, tabClick:this.selectTab, key:3, selected:false},
        {text:'Gloves', index:3, tabClick:this.selectTab, key:4, selected:false},
      ],
      tabsContent: [ <WelcomeContent />, <UserContent />, <FillerContent />, <FillerContent />
      ]
    }

  };

  deselectTab(tabs, oldTab){
    let deselectedTab = tabs[oldTab];
    deselectedTab.selected = false;

    let newTabs = [...tabs];
    newTabs[oldTab] = deselectedTab;

    return newTabs;
  }

  setNewSelected(tabs, newTabIndex){
    let newSelectedTab = tabs[newTabIndex];
    newSelectedTab.selected = 'true';

    let newTabs = [...tabs];
    newTabs[newTabIndex] = newSelectedTab;

    return tabs;
  }

  updateTabState(tabs, newTabIndex){
    let newTabs = this.deselectTab(tabs, this.state.selectedTab);
    newTabs = this.setNewSelected(newTabs, newTabIndex);

    return newTabs;
  }


  selectTab(index) {
    this.setState({
      tabs: this.updateTabState(this.state.tabs, index),
      selectedTab: index
    });
  }

  render() {
    return (
      <div className='TabsWindow'>
        <div className='Tabs'>
          {this.state.tabs.map(tab => {
            return <Tab text={tab.text} index={tab.index} selected={tab.selected} tabClick={tab.tabClick} key={tab.key} />
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