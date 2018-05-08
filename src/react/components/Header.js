import React from 'react'
import logo from '../../assets/img/logo.png'

const logos = [
  { src: 'logo-bbc.png', alt: 'seen on bbc logo' },
  { src: 'logo-forbes.png', alt: 'seen on forbes logo' },
  { src: 'logo-techcrunch.png', alt: 'seen on tech crunch logo' },
  { src: 'logo-bi.png', alt: 'seen on business insider logo' }
]

const Header = () => (
  <header className="header">
    <img src={logo} alt="Nexter logo" className="header__logo"/>
    <h3 className="heading-3">Your own home</h3>
    <h1 className="heading-1">The ultimate personal freedom</h1>
    <button className="btn header__btn"> View your properties</button>
    <div className="header__text">As seen on</div>
    <div className="header__logos">
      { logos.map(logo => (
        <img key={logo.src} src={require(`../../assets/img/${logo.src}`)} alt={logo.alt} />
      ))}
    </div>
  </header>
);

export default Header;
