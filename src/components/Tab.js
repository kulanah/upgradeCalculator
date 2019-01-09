import React, { Component } from 'react';

class Tab extends Component {
  constructor(props) {
    super(props);

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(){
    this.props.tabClick(this.props.index);
  }
  
  render() {
    return (
      <span className={this.props.selected ? 'Tab SelectedTab' : 'Tab'} index={this.props.index} onClick={this.selectTab}>
        {this.props.text}
        
      </span>
    );
  }
}

export default Tab;