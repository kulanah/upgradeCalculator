import React, { Component } from 'react';
import './App.css';
import UserStats from './components/UserStats';
import UserGear from './components/UserGear';
import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs />
          {/* <UserStats />
          <UserGear /> */}
      </div>
    );
  }
}

export default App;
