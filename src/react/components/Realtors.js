import React from 'react';

const realtors = [
  { name: 'Sam Bell', src: '1', alt: 'realtor Sam', sold: 245 },
  { name: 'Samantha Belle ', src: '2', alt: 'realtor Samantha', sold: 212 },
  { name: 'Samuel Bel', src: '3', alt: 'realtor Samuel', sold: 198 },
];

const Realtors = () => (
  <div className="realtors">
    <h3 className="heading-3">Top 3 Realtors</h3>
    <div className="realtors__list" >
      { realtors.map( realtor => (
        <div key={realtor.name} className='realtors__item'>
          <img src={require(`../../assets/img/realtor-${realtor.src}.jpeg`)} alt={realtor.alt} className='realtors__img'/>
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">{realtor.name}</h4>
            <p className="realtors__sold">{realtor.sold} houses sold</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Realtors;
