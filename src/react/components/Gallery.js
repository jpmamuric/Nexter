import React from 'react';

const galleryitems = [ '1','2','3','4','5','6','7','8','9','10','11','12','13','14'];

const Gallery = () => (
  <section className="gallery">

    { galleryitems.map( item =>(
      <figure key={item} className={`gallery__item gallery__item--${item}`}>
        <img
          alt="gallery"
          className="gallery__img"
          src={require(`../../assets/img/gal-${item}.jpeg`)} />
      </figure>
    ))}
  </section>
);

export default Gallery;
