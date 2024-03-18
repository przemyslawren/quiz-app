import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__content"></div>
        <div className="footer__content">
          <p>Created by Przemek</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
    );
  }
}

export default Footer;
