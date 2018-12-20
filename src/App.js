import React, { Component } from 'react';
import './App.css';
import UserStats from './components/UserStats';
import UserGear from './components/UserGear';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserStats />
          <UserGear />
      </div>
    );
  }
}

export default App;
