import React, {Component} from 'react';
import './App.scss';
import Picture from './components/Picture';
import Info from './components/Info';
import Help from './components/Help';
import Chance from 'chance';

class App extends Component {



  constructor(props){
    super(props);
    this.state = {img: "", title: "Loading...", info:"Loading info..."}
    this.randomYear = this.randomYear.bind(this);

    fetch('https://api.nasa.gov/planetary/apod?api_key=YjgpSkeJQNmnf116wdDv1BJTZwH71uH0U72S3JHb')
      .then((response) => {
        return response.json()
      }).then((json) => {
        this.setState({
          img: json.url,
          title: json.title,
          info: json.explanation
        });
        // console.log(this.state.img);
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })

      this.setState({ img: true });
  }

  randomYear() {
    let chance = new Chance();
    const randomYear = Math.floor(Math.random() * (2017 - 1995)) + 1995;
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
        <Info title={this.state.title} info={this.state.info} />
        <Help/>
        <Picture imgurl={this.state.img}/>
      </div>
    );
  }
}

export default App;
