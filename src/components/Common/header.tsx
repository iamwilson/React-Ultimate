// base
import * as React from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {
  onLogOutClick: (e: any) => void;
  openSideBar: (e: any) => void;
  showHeader?: any;
}

const HeaderComponent: React.SFC<IHeaderProps> = (props: IHeaderProps) => {
  return (
    <div className="header-container">
      <ul className="header-ul">
      <button className="hamburger-menu" onClick={props.openSideBar}>☰</button>
        <Link className="header-li" to="/home" replace={true}>Home</Link>
        <Link className="header-li" to="/home/about" replace={true}>About</Link>
        <button className="log-out-button" onClick={props.onLogOutClick}>Logout</button>
      </ul>
    </div>
  );
};

export default HeaderComponent;
