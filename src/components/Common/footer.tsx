// base 
import * as React from 'react';
import { Link } from 'react-router-dom'; 

class HeaderComponent extends React.Component{
  render() {
    return (
      <div className="header-container">
        <ul className="header-ul">
          <Link className="header-li" to="/">Home</Link>
          <Link className="header-li" to="/About">About</Link>
        </ul>
      </div>
    );
  }
}

export default HeaderComponent;
