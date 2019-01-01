// base
import * as React from "react";
import { Link } from "react-router-dom";

interface ISidePanelProps {
    openSideBar: boolean;
}

const SidePanelComponent: React.SFC<ISidePanelProps> = (props: ISidePanelProps) => {
    return (
        (
            <div id="sidebar" className={props.openSideBar ? "open" : "close"}>
                <Link className="sidebar-item" to="/home" replace={true}>Home</Link>
                <Link className="sidebar-item" to="/home/inventory" replace={true}>Inventory</Link>
                <Link className="sidebar-item" to="/home/about" replace={true}>About</Link>
            </div>
        )
    );
};

export default SidePanelComponent;
