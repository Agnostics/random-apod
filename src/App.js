import React, {Component} from 'react';
import './App.scss';
import Picture from './components/Picture'
import Info from './components/Info'
import Help from './components/Help'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Info/>
        <Help/>
        <Picture/>
      </div>
    );
  }
}

export default App;
