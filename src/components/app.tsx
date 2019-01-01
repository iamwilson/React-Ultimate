// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import * as userActions from "../actions/loginActions";

// components
import HomeComponent from "./home";
import LoginComponent from "./login/login";
import LoaderComponent from "./elements/loader";

interface IAppProps {
  actions: any;
  isLoading: any;
  history: any;
  isAuthenticated: any;
}

interface IAppState {
  loginSuccess: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginSuccess: false
    };
  }

  render() {

    console.log(this.props.isLoading);
    return (
      <div className="app-container">
        <LoaderComponent isLoading={this.props.isLoading > 0} />
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route exact={true} path="/" render={() => (<Redirect to="/login" />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.isLoading,
    isAuthenticated: state.login.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(App));
