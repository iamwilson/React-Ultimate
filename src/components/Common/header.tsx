// base
import * as React from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends React.Component{

  logOutUser(){}

  render() {
    
      return (
        <div className="header-container">
          <ul className="header-ul">
            <Link className="header-li" to="/" replace>Home</Link>
            <Link className="header-li" to="/about" replace>About</Link>
            <button className="log-out-button" onClick={this.logOutUser}>Logout</button>
          </ul>
        </div>
      );
    }
}

export default HeaderComponent;
