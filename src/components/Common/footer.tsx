// base
import * as React from 'react';

interface IFooterComponentProps {
  language: any;
  switchLanguage: (code: any) => void;
}

class FooterComponent extends React.Component<IFooterComponentProps, any> {
  render() {
    return (
      <div className='footer-bar'>
        <span className='rights-bar'>
          {this.props.language.footerComponent.copyright}
        </span>
        <span className='translate-bar'>
          {this.props.language.footerComponent.language} |
        <select className='language-menu' onChange={(e) => this.props.switchLanguage(e.target.value)}>
            <option value='en'>English</option>
            <option value='fr'>French</option>
          </select>
        </span>
      </div>
    );
  }
}

export default FooterComponent;
