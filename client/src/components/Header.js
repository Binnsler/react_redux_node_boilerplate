import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render(){
    return (
      <div>
        <ul className="navbar">
          <li><Link to="">Home</Link></li>
          <li><Link to="page1">Page 1</Link></li>
          <li><Link to="page2">Page 2</Link></li>
        </ul>
      </div>
    );
  }
};

export default Header;
