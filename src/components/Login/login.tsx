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

    this.loginHandler = this.loginHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ [e.target.name]: e.target.value } as any);
  }

  loginHandler() {
    setTimeout(() => { this.props.isAuthenticated(true); }, 500);
  }

  render() {
    return (
      <div className="login-container">
      <div className="login-logo">EMS</div>
        <div className="login-wrapper">
          <TextBoxComponent
            label="Username:"
            name="userName"
            type="text"
            focus={true}
            placeholder="Enter Username"
            value={this.state.userName}
            onChange={this.changeHandler}
          />
          <TextBoxComponent
            label="Password:"
            name="passWord"
            type="password"
            placeholder="Enter Password"
            value={this.state.passWord}
            onChange={this.changeHandler}
          />
          <button onClick={this.loginHandler}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
