import React from 'react';
import './help.scss'

const Help = () => {
  return (
    <div className="help-contain">
      <div className="button">
        <i className="ion-help-circled" aria-hidden="true"></i>
      </div>
      <div className="detail">
        <ul>
          Click:
          <li>image for new random APOD</li>
          <li>title on the bottom left for more info on the image</li>
          <li>date on the bottom right to select a certain date</li>
        </ul>
      </div>
    </div>
  );
};

export default Help;
