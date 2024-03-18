import React from 'react';
import './Header.scss';

//react convention, function with uppercase letter
const Header = () => {
  return (
    //here we use a className not class
    <div className="header__container">
      <h1 className="ui header">
        <i className="tasks icon"></i>
        <div className="content">
          The quiz app!
          <div className="sub header">
            Test your knowledge about countries and capitals
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Header;
