import React from 'react';

import Icon from './shared/Icon';

const features = [
  {
    name: 'global',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    heading: 'World\'s best luxury homes'
  },
  {
    name: 'trophy',
    text: 'Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.',
    heading: 'Only the best properties' },
  {
    name: 'map-pin',
    text: 'Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.',
    heading: 'All homes in top locations'
  },
  {
    name: 'key',
    text: 'Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    heading: 'New home in one week'
  },
  {
    name: 'presentation',
    text: 'Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.',
    heading: 'Top Realtors'
   },
  {
    name: 'lock',
    text: 'Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.',
    heading: 'Secure payments on nexter'
   }
]



const Features = () => (
  <section className="features">
  {
    features.map( (feature,i) => (
      <div key={i} className="feature">
       <Icon name={feature.name}/>
       <h4 className='heading-4 heading-4--dark'>{feature.heading}</h4>
       <p className="feature__text">{feature.text}</p>
      </div>
    ))
  }
  </section>
);

export default Features;
