import React from 'react';

class UserTab extends React.Component{
  constructor(props) {
    super(props);

    this.name = "User Stats";
    
    this.getName = this.getName.bind(this);
  }

  getName(){
    return this.name;
  }

  
  
  render(){
    return(
      <div className="UserTab">
        <div className="UserStats">

        </div>
        <div className="UserItems">

        </div>
      </div>
    )
  }
}


export default UserTab;