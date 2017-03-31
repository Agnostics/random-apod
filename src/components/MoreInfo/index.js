import React, {Component} from 'react';
import './moreinfo.scss';

class MoreInfo extends Component {
  render() {
    return (
      <div>
        <div className="more-info-contain">
          <p>{this.props.info}</p>
        </div>

      </div>
    );
  }
}

export default MoreInfo;
