import React from 'react';

const links = [
  { text : 'Find your dream home' },
  { text : 'Request Proposal' },
  { text : 'Download home planner' },
  { text : 'Contact us'},
  { text : 'Submit your property' },
  { text : 'Come work with us' }
]

const Footer = () => (
  <footer className="footer">
    <ul className="footer__ul">
      { links.map( link =>(
        <li className="footer__li">
          <a href="/" className="footer__a">{link.text}</a>
        </li>
      ))}
    </ul>
    <p className="footer__copyright">
     <span className='footer__copyright-span'>
        &copy; Copyright 2017 by Jan Peter Mamuric
      </span>.
      <span>
        Original design by Jonas Schmedtmann.
      </span>
    </p>
  </footer>
);

export default Footer;
