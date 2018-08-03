// base
import * as React from "react";
import { Route, Switch } from "react-router-dom";

// components
import ListComponent from "./employee/list";
import LoginComponent from "./login/login";
import AboutComponent from "./about/about";
import HeaderComponent from "./common/header";
import EmployeeComponent from "./employee/employee";
import InventoryComponent from "./inventory/inventory";

interface IAppProps {}

interface IAppState {
  loginSuccess: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      loginSuccess: false
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
          <Switch>
            <Route exact path="/" component={ListComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/inventory" compinent={InventoryComponent} />
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

export default App;
