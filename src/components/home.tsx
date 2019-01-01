// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Route, Switch, withRouter } from "react-router-dom";

import * as userActions from "../actions/loginActions";

// components
import AboutComponent from "./about/about";
import HeaderComponent from "./common/header";
import SidePanelComponent from "./common/sidepanel";
import EmployeeComponent from "./employee/employee";
import InventoryComponent from "./inventory/inventory";
import EmployeeListComponent from "./employee/employeeList";

import { PrivateRoute } from "../utils/router";

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
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleLogOut(e: any) {
    this.props.actions.logoutUser();
    this.props.history.replace("/login");
  }

  handleOpenSideBar() {
    const isOpen = this.state.openSideBar === false ? true : false;
    this.setState({ openSideBar: isOpen });
  }

  handleClickOutside() {
    if (this.state.openSideBar === true) {
      this.setState({openSideBar : false});
    }
  }

  render() {
    return (
      <div className="home-container" onClick={this.handleClickOutside}>
        <SidePanelComponent openSideBar={this.state.openSideBar} />
        <HeaderComponent openSideBar={this.handleOpenSideBar} onLogOutClick={this.handleLogOut} />
        <Switch>
          <Route exact={true} path="/home" component={EmployeeListComponent} />
          <Route path="/home/about" component={AboutComponent} />
          <Route path="/home/employee/:id?" component={EmployeeComponent} />
          <PrivateRoute path="/home/inventory" auth={true} component={InventoryComponent} />
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
