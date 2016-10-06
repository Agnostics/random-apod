import React, {Component} from 'react';
import './info.scss';

class Info extends Component {

  render() {
    return (
      <div className="info-contain">
        <div onMouseOver={this.change} id="hover" className="title bar">Layered Butte on Mars</div>
        <div className="date bar">Feb 23, 2007</div>
      </div>
    );
  }
}

export default Info;
