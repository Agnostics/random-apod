import React from 'react';
import test from './test2.jpg'
import './picture.scss';

const Picture = () => {
  return (
    <div className="image-contain">
      <img className="main-image" alt="test2" src={test}/>
    </div>
  );
};

export default Picture;
