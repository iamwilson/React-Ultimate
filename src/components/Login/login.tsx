// base
import * as React from 'react';
import { connect } from 'react-redux';

// components
import TextBoxComponent from '../elements/TextBox';

interface ILoginComponentProps {
  isAuthenticated: (value: boolean) => void;
}

interface ILoginComponentState {
  userName: string;
  passWord: string;
}

class LoginComponent extends React.Component<
  ILoginComponentProps,
  ILoginComponentState
> {
  constructor(props: ILoginComponentProps) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ [e.target.name]: e.target.value } as any);
  }

  submitLogin() {
    this.props.isAuthenticated(true);
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-wrapper">
          <TextBoxComponent
            label="Username"
            name="userName"
            type="text"
            focus={true}
            placeholder="Enter Username"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <TextBoxComponent
            label="Password"
            name="passWord"
            type="password"
            placeholder="Enter Password"
            value={this.state.passWord}
            onChange={this.handleChange}
          />
          <button onClick={this.submitLogin}>Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loginSuccess: state.loginSuccess
  };
};

export default connect(mapStateToProps)(LoginComponent);
