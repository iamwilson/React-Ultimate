// base
import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";

// components
import LoginComponent from "./login/login";
import AboutComponent from "./about/about";
import HeaderComponent from "./common/header";
import LoaderComponent from "./elements/loader";
import SidePanelComponent from "./common/sidepanel";
import EmployeeComponent from "./employee/employee";
import EmployeeListComponent from "./employee/employeeList";

interface IAppProps {
  isLoading: any;
  isAuthenticated: any;
}

interface IAppState {
  loginSuccess: boolean;
  openSideBar: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginSuccess: false,
      openSideBar: false
    };
    this.logOut = this.logOut.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
  }

  logOut(e: any) {}

  openSideBar() {
    let isOpen = this.state.openSideBar == false ? true : false;
    this.setState({ openSideBar: isOpen });
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <div>
          <SidePanelComponent sideBarOpen={this.state.openSideBar} />
          <HeaderComponent openSideBar={this.openSideBar} onLogOutClick={this.logOut}/>
          <LoaderComponent isLoading={this.props.isLoading > 0} />
          <Switch>
            <Route exact path="/" component={EmployeeListComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route exact path="/employee" component={EmployeeComponent} />
            <Route exact path="/employee/:id" component={EmployeeComponent} />
          </Switch>
        </div>
      );
    } else {
      return <LoginComponent />;
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.isLoading,
    isAuthenticated: state.user.isAuthenticated
  };
};

export default withRouter<any>(connect(mapStateToProps)(App));
