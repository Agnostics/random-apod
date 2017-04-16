import React, {Component} from 'react';
import './App.scss';
import Help from './components/Help';
import Chance from 'chance';
import moment from 'moment';

import DatePicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      title: "Loading title...",
      info: "Loading info...",
      date: "Loading date...",
      calendar: moment(),
      open: false,
      picker: false,
      isFetching: true
    }
    this.randomYear = this.randomYear.bind(this);
    this.imgLoaded = this.imgLoaded.bind(this);
    this.toggleMore = this.toggleMore.bind(this);
    this.toggleDate = this.toggleDate.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillMount() {
    const now = moment().toString().split(" ");
    const formatedNow = now[1] + " " + now[2] + ", " + now[3];

    fetch('https://api.nasa.gov/planetary/apod?api_key=YjgpSkeJQNmnf116wdDv1BJTZwH71uH0U72S3JHb').then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({img: json.hdurl, title: json.title, info: json.explanation, date: formatedNow});

    }).catch((ex) => {
      console.log('parsing failed', ex)
    });

  }

  imgLoaded() {
    this.setState({isFetching: false});
  }

  toggleMore() {
    this.setState({
      open: !this.state.open
    });
  };

  toggleDate() {
    this.setState({
      picker: !this.state.picker
    });
  };

  handleChange (date) {

    this.setState({isFetching: true});
    const url = "https://api.nasa.gov/planetary/apod?api_key=YjgpSkeJQNmnf116wdDv1BJTZwH71uH0U72S3JHb&hd=true&date=" + date.format("YYYY-MM-DD");
    const now = date._d.toString().split(" ");
    const formatedNow = now[1] + " " + now[2] + ", " + now[3];

    let intElemClientWidth = document.documentElement.clientWidth;

    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      if(intElemClientWidth < 1024) {
        this.setState({img: json.url, title: json.title, info: json.explanation, date: formatedNow});
      } else{
        this.setState({img: json.hdurl, title: json.title, info: json.explanation, date: formatedNow});
      }
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });




    this.setState({calendar: date, date: formatedNow})
    this.toggleDate()
  }

  randomYear() {
    this.setState({isFetching: true});
    let chance = new Chance();
    const randomYear = Math.floor(Math.random() * (2017 - 1996)) + 1996;
    const unformated = chance.date({string: true, year: randomYear});

    let dateArray = unformated.split("/");
    const year = dateArray[2];
    const day = dateArray[1];
    const month = dateArray[0];

    const randomDate = year + "-" + month + "-" + day;
    const formatedDate = formatDate(day, month, year);
    const url = "https://api.nasa.gov/planetary/apod?api_key=YjgpSkeJQNmnf116wdDv1BJTZwH71uH0U72S3JHb&hd=true&date=" + randomDate;


    let intElemClientWidth = document.documentElement.clientWidth;
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      if(intElemClientWidth < 1024) {
        this.setState({img: json.url, title: json.title, info: json.explanation, date: formatedDate});
      } else{
        this.setState({img: json.hdurl, title: json.title, info: json.explanation, date: formatedDate});
      }
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
  };

  render() {
    return (
      <div className="container">
        <Help />
        <div className="info-contain">
          <div onClick={this.toggleMore} id="hover" className="title bar">{this.state.title}</div>
          {this.state.picker && (
            <DatePicker
                selected={this.state.calendar}
                onChange={this.handleChange}
                minDate={new Date(1995, 5, 16)}
                maxDate={moment()}
                withPortal
                showYearDropdown
                inline />
        )}
          <div onClick={this.toggleDate} className="date bar">{this.state.date}</div>
        </div>

        {this.state.open ? <div className="more-info-contain"><p>{this.state.info}</p></div>: null}

        <div className="image-contain">
          {this.state.isFetching ? <div className="loader">Loading...</div> : null}
          <img onClick={this.randomYear} onLoad={this.imgLoaded} className="main-image" role="presentation" src={this.state.img}/>
        </div>

      </div>
    );
  }

}

function formatDate(day, month, year) {
  switch (month) {
    case "1":
      return "Jan " + day + ", " + year;
    case "2":
      return "Feb " + day + ", " + year;
    case "3":
      return "Mar " + day + ", " + year;
    case "4":
      return "Apr " + day + ", " + year;
    case "5":
      return "May " + day + ", " + year;
    case "6":
      return "Jun " + day + ", " + year;
    case "7":
      return "Jul " + day + ", " + year;
    case "8":
      return "Aug " + day + ", " + year;
    case "9":
      return "Sep " + day + ", " + year;
    case "10":
      return "Oct " + day + ", " + year;
    case "11":
      return "Nov " + day + ", " + year;
    case "12":
      return "Dec " + day + ", " + year;
    default:
      return "Error Loading Date."
  }
}

export default App;
