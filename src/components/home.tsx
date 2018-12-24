// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import * as userActions from "../actions/loginActions";

// components
import AboutComponent from "./about/about";
import HeaderComponent from "./common/header";
import SidePanelComponent from "./common/sidepanel";
import EmployeeComponent from "./employee/employee";
import EmployeeListComponent from "./employee/employeeList";

interface IAppProps {
  actions: any;
  history: any;
  store: any;
}

interface IAppState {
  loginSuccess: boolean;
  openSideBar: boolean;
}

class Home extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      loginSuccess: false,
      openSideBar: false
    };
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleOpenSideBar = this.handleOpenSideBar.bind(this);
  }

  handleLogOut(e: any) {
    this.props.actions.logoutUser();
    this.props.history.replace("/login");
  }

  handleOpenSideBar() {
    const isOpen = this.state.openSideBar === false ? true : false;
    this.setState({ openSideBar: isOpen });
  }

  render() {
    return (
      <div>
        <SidePanelComponent sideBarOpen={this.state.openSideBar} />
        <HeaderComponent
          openSideBar={this.handleOpenSideBar}
          onLogOutClick={this.handleLogOut}
        />
        <Switch>
          <Route path="/home" component={EmployeeListComponent} />
          <Route path="/home/about" component={AboutComponent} />
          <Route path="/home/employee" component={EmployeeComponent} />
          <Route path="/home/employee/:id" component={EmployeeComponent} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    store: state
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default withRouter<any>(connect(mapStateToProps, mapDispatchToProps)(Home));
