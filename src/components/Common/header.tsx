// base
import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderComponentProps {
  openSideBar: (e: React.MouseEvent<HTMLButtonElement>) => void;
  language: any;
}

const HeaderComponent: React.SFC<IHeaderComponentProps> = (props: IHeaderComponentProps) => {
  return (
    <div className='header-container'>
      <ul className='header-ul'>
        <button className='hamburger' onClick={props.openSideBar}>☰</button>
        <Link className='header-li' to='/home' replace={true}>{props.language.headerComponent.title}</Link>
      </ul>
    </div>
  );
};

export default HeaderComponent;
