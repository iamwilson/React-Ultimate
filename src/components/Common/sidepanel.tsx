// base
import * as React from 'react';
import { Link } from 'react-router-dom';

class SidePanelComponent extends React.Component {
    render() {
        return (

            <div className="w3-sidebar w3-bar-block">
                <button className="w3-bar-item w3-large" onClick={this.closeMenu}>Close &times;</button>
                <Link className="w3-bar-item w3-button" to="/" replace>Home</Link>
                <Link className="w3-bar-item w3-button" to="/department" replace>Departments</Link>
                <Link className="w3-bar-item w3-button" to="/about" replace>About</Link>
            </div>

        )
    }
    closeMenu(){
        console.log("close clicked !");
    }
}

export default SidePanelComponent;