import React, {Component} from 'react';
import './info.scss';

class Info extends Component {

  showInfo () {
    alert('msg');
  }

  render() {
    return (
      <div>
        <div className="info-contain">
          <div onClick={this.showInfo} id="hover" className="title bar">Layered Butte on Mars</div>
          <div className="date bar">Feb 23, 2007</div>
        </div>

        <div className="more-info-contain"> sdf </div>

      </div>
    );
  }
}

export default Info;
