// base
import * as React from 'react';
import { connect } from 'react-redux';
// tslint:disable-next-line:no-duplicate-imports
import { lazy, Suspense } from 'react';
import { bindActionCreators } from 'redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

// components
const HomeComponent = lazy(() => import('./home'));
const LoginComponent = lazy(() => import('./login/login'));

import FooterComponent from './common/footer';
import LoaderComponent from './elements/loader';
import * as loginAction from '../actions/loginActions';

// utils
import { initializeLanguage, switchLanguage } from '../utils/languageHelper';

interface IAppProps {
  actions: any;
  isLoading: any;
}

interface IAppState {
  language: any;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      language: initializeLanguage(),
    };

    this.handleSwitchLanguage = this.handleSwitchLanguage.bind(this);
  }

  handleSwitchLanguage(e: any) {
    const language = switchLanguage(e);
    this.setState({ language: language });
  }

  render() {
    return (
      <div className='main'>
        <LoaderComponent isLoading={this.props.isLoading > 0} />
        <FooterComponent switchLanguage={this.handleSwitchLanguage} {...this.state.language} />
        <Suspense fallback={<LoaderComponent isLoading={true} />}>
        <Switch>
          <Route exact={true} path='/' render={() => <Redirect to='/login' />} />
          <Route path='/home' render={(props) => <HomeComponent {...props} {...this.state.language} />} />
          <Route path='/login' render={(props) => <LoginComponent {...props} {...this.state.language} />} />
        </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(loginAction, dispatch)
  };
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(App));
