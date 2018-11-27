// base
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

// components
import ListComponent from './components/employee/list';
import LoginComponent from './components/login/login';
import AboutComponent from './components/about/about';
import HeaderComponent from './components/common/header';
import EmployeeComponent from './components/employee/employee';
import InventoryComponent from './components/inventory/inventory';
import LoaderComponent from './components/elements/loader';

interface IAppProps {
  isLoading: any;
}

interface IAppState {
  loginSuccess: any;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginSuccess: true
    };

    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated(value: boolean) {
    if (value) this.setState({ loginSuccess: value });
  }

  render() {
    if (this.state.loginSuccess) {
      return (
        <div>
          <HeaderComponent />
          <LoaderComponent isLoading={this.props.isLoading > 0} />
          <Switch>
            <Route exact path="/" component={ListComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/inventory" component={InventoryComponent} />
            <Route exact path="/employee" component={EmployeeComponent} />
            <Route exact path="/employee/:id" component={EmployeeComponent} />
          </Switch>
        </div>
      );
    } else {
      return <LoginComponent isAuthenticated={this.isAuthenticated} />;
    }
  }
}

function mapStateToProps(state: any) {
  return {
    isLoading: state.isLoading
  };
}

export default withRouter<any>(connect(mapStateToProps)(App));
