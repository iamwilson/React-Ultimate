// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import english from "../assets/languages/en-lang";
import french from "../assets/languages/fr-lang";

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
  language: any;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginSuccess: false,
      language: this.getDefaultLanguage(),
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  getDefaultLanguage() {
      return english;
  }

  changeLanguage(code: any) {
    if (code === "en") {
      this.setState({language: english});
    } else {
      this.setState({language: french});
    }
  }

  render() {
    return (
      <div className="app-container">
        <LoaderComponent isLoading={this.props.isLoading > 0} />
        <button onClick={() => this.changeLanguage("en")}>ENG</button>
        <button onClick={() => this.changeLanguage("fr")}>FRA</button>
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route exact={true} path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" render={(props) => <LoginComponent {...props} {...this.state.language}/>}  />
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

export default withRouter<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
