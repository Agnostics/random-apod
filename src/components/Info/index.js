import React, {Component} from 'react';
import './info.scss';
import MoreInfo from '../MoreInfo'

class Info extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.toggleMore = this.toggleMore.bind(this);
  }

  toggleMore() {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <div>
        <div className="info-contain">
          <div onClick={this.toggleMore} id="hover" className="title bar">{this.props.title}</div>
          <div className="date bar">Feb 23, 2007</div>
        </div>
        {this.state.open
          ? <MoreInfo info={this.props.info}/>
          : null}
      </div>
    );
  }
}

export default Info;
