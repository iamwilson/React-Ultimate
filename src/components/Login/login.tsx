// base
import * as React from 'react';

// components
import TextBoxComponent from '../elements/textBox';

interface ILoginComponentProps {
  isAuthenticated: (value: boolean) => void;
}

interface ILoginComponentState {
  userName: string;
  passWord: string;
}

class LoginComponent extends React.Component<ILoginComponentProps, ILoginComponentState> {
  constructor(props: ILoginComponentProps) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ [e.target.name]: e.target.value } as any);
  }

  submitLogin() {
    setTimeout(() => { this.props.isAuthenticated(true); }, 500);
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

export default LoginComponent;
