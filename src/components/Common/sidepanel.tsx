// base
import * as React from 'react';
import { Link } from 'react-router-dom';

interface ISidePanelProps {
    sideBarOpen: boolean;
}

const SidePanelComponent: React.StatelessComponent<ISidePanelProps> = (props: ISidePanelProps) => {
        return (
            props.sideBarOpen &&
            
            <div className="sidebar-wrapper">
                <Link className="sidebar-item" to="/" replace>Home</Link>
                <Link className="sidebar-item" to="/department" replace>Departments</Link>
                <Link className="sidebar-item" to="/about" replace>About</Link>\
            </div>
        )
}

export default SidePanelComponent;