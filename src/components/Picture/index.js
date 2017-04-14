import React, {Component} from 'react';
import './picture.scss';

class Picture extends Component {
  render() {
    return (
      <div className="image-contain">
        <img className="main-image" role="presentation" src={this.props.imgurl}/>
      </div>
    );
  }
}

export default Picture;
