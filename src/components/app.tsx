// base
import * as React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// components
import LoginComponent from "./Login/login";
import AboutComponent from "./About/about";
import HeaderComponent from "./common/header";
import ListComponent from "./Employee/list";
import DetailsComponent from "./Employee/details";
import LoaderComponent from "./Elements/Loader";

interface IAppProps {
  // isLoading: boolean;
}

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
          {/* <LoaderComponent isLoading={this.props.isLoading}/> */}
          <Switch>
            <Route exact path="/" component={ListComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/employee/:id" component={DetailsComponent} />
          </Switch>
        </div>
      );
    } else {
      return <LoginComponent isAuthenticated={this.isAuthenticated} />;
    }
  }
}

// const mapStateToProps=(state: any) =>{
//   return{
//     isLoading: state.employees.isLoading,
//   }
// }

export default (App);
