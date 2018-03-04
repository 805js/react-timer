import React, {Component} from 'react';
import './App.css';
import Timer from './Timer';
import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div className="app">
        <img
          src={logo}
          className="logo"
          alt="logo" />
        <Timer />
      </div>
    );
  }
}

export default App;
