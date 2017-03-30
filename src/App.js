import React, {Component} from 'react';
import './App.scss';
import Picture from './components/Picture'
import Info from './components/Info'
import Help from './components/Help'

import Chance from 'chance';

class App extends Component {

  constructor(props){
    super(props);
    this.randomYear = this.randomYear.bind(this);
}

  randomYear() {
    const randomYear = Math.floor(Math.random() * (2017 - 1995)) + 1995;
    let chance = new Chance();
    const unformated = chance.date({string: true, year: randomYear});

    let dateArray = unformated.split("/");
    const year = dateArray[2];
    const day = dateArray[1];
    const month = dateArray[0];

    const randomDate = year + "-" + month + "-" + day;

    console.log(randomDate);
  };


  render() {
    return (
      <div onClick={this.randomYear} className="container">
        <Info/>
        <Help/>
        <Picture />
      </div>
    );
  }
}

export default App;
