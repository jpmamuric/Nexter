import React from 'react';

import story from '../../../assets/img/story-1.jpeg';
import story2 from '../../../assets/img/story-2.jpeg';

const Pictures = () => (
  <div className="review__pictures">
   <img src={story} alt="Couple with new house" className="review__img review__img--1"/>
   <img src={story2} alt="New house" className="review__img review__img--2"/>
  </div>
);

export default Pictures;
