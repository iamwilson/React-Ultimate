// base

import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// misc

import { Credentials } from "../../models/credentials";
import TextBoxComponent from "../elements/textBox";
import * as validation from "../../utils/validations";
import * as userActions from "../../actions/userActions";

interface ILoginComponentProps {
  actions: any;
  loginResult: any;

}

interface ILoginComponentState {
  credentials: Credentials;
  errors: Credentials;
}

class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {
  constructor(props: ILoginComponentProps) {
    super(props);

    this.state = {
      credentials: new Credentials(),
      errors: new Credentials()
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    const key = e.target.name;
    const value = e.target.value;

    this.validateFields(key, value);

    const credentialsObject: Credentials = {...this.state.credentials };

    credentialsObject[key] = value;
    this.setState({ credentials: credentialsObject });
  }

  validateFields(key: any, value: any) {
    const errors = new Credentials();

    switch (key) {
      case "username":
        if (!validation.IsInputNotNull(value)) {
          errors.userName = "Please enter username";
        }
        break;

      case "password":
        if (!validation.IsInputNotNull(value)) {
          errors.passWord = "Please enter password";
        }
        break;

      default: break;
    }

    const errorObject = { ...this.state.errors, [key]: errors[key] };
    this.setState({ errors: errorObject });

  }

  handleLogin() {

    this.props.actions.loginUser(this.state.credentials).then(() => {

      // console.log(this.props.loginResult);
    });

  }

  render() {
    const areEmpty = Object.keys(this.state.credentials).some((key) => this.state.credentials[key] === "");
    const hasError = Object.keys(this.state.errors).some((key) => this.state.errors[key] !== "");

    return (

      <div className="login-container">
        <div className="login-welcome">EMS</div>

        <div className="login-wrapper">
          <TextBoxComponent
            label="Username:"
            name="userName"
            type="text"
            focus={true}
            placeholder="Enter Username"
            value={this.state.credentials.userName}
            error={this.state.errors.userName}
            onChange={this.handleChange}
          />

          <TextBoxComponent
            label="Password:"
            name="passWord"
            type="password"
            placeholder="Enter Password"
            value={this.state.credentials.passWord}
            error={this.state.errors.passWord}
            onChange={this.handleChange}
          />

          <button className="btn btn-login" disabled={hasError || areEmpty} onClick={this.handleLogin}>Login </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loginResult: state.user
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
