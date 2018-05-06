import React from 'react';

import Icon from './shared/Icon';

const homes = [
  {
    src: "1",
    heading: 'Beautiful Family House',
    details: [
      { type: 'location', content: 'USA' , iconName: 'map-pin' },
      { type: 'rooms', content: '5 rooms' , iconName: 'profile-male' },
      { type: 'area', content: '325 sq ft' , iconName: 'expand' },
      { type: 'price', content: '$1,200,000' , iconName: 'key' }
    ]
  },
  {
    src: "2",
    heading: 'Modern Glass Villa',
    details: [
      { type: 'location', content: 'Canada' , iconName: 'map-pin' },
      { type: 'rooms', content: '6 rooms' , iconName: 'profile-male' },
      { type: 'area', content: '450 sq ft' , iconName: 'expand' },
      { type: 'price', content: '$2,750,000' , iconName: 'key' }
    ]
  },
  {
    src: "3",
    heading: 'Cozy Country House',
    details: [
      { type: 'location', content: 'UK' , iconName: 'map-pin' },
      { type: 'rooms', content: '4 rooms' , iconName: 'profile-male' },
      { type: 'area', content: '250 sq ft' , iconName: 'expand' },
      { type: 'price', content: '$850,000' , iconName: 'key' }
    ]
  },
  {
    src: "4",
    heading: 'Large Rustical Villa',
    details: [
      { type: 'location', content: 'Portugal' , iconName: 'map-pin' },
      { type: 'rooms', content: '6 rooms' , iconName: 'profile-male' },
      { type: 'area', content: '480 sq ft' , iconName: 'expand' },
      { type: 'price', content: '$1,950,000' , iconName: 'key' }
    ]
  },
  {
    src: "5",
    heading: 'Majestic Palace House',
    details: [
      { type: 'location', content: 'Germany' , iconName: 'map-pin' },
      { type: 'rooms', content: '8 rooms' , iconName: 'profile-male' },
      { type: 'area', content: '1230 sq ft' , iconName: 'expand' },
      { type: 'price', content: '$9,500,000' , iconName: 'key' }
    ]
  },
  {
    src: "6",
    heading: 'Modern Family Apartment',
    details: [
      { type: 'location', content: 'Italy' , iconName: 'map-pin' },
      { type: 'rooms', content: '3 rooms' , iconName: 'profile-male' },
      { type: 'area', content: '180 sq ft' , iconName: 'expand' },
      { type: 'price', content: '600,000' , iconName: 'key' }
    ]
  }
]


const Homes = () => (
  <section className="homes">
    {
      homes.map((home, i) => (
          <div className="home" key={i}>
            <img
              src={require(`../../assets/img/house-${home.src}.jpeg`)}
              alt=""
              className="home__img"/>
            <Icon name='heart-full' class='heart'/>
            <h5 className="home__heading">{home.heading}</h5>
            {
              home.details.map( (detail, i) => (
                <div key={i} className={`home__${detail.type}`}>
                  <Icon name={detail.iconName} class='detail'/>
                  <p className='home__detail-content'>{detail.content}</p>
                </div>
              ))
            }
            <button className="btn home__btn">Contact</button>
          </div>
      ))
    }
  </section>
);

export default Homes;

//
