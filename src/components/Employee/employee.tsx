import * as React from "react";
import TextBoxComponent from '../Elements/TextBox';

interface IEmployeeComponentProps{
  match: any

}

class EmployeeComponent extends React.Component<IEmployeeComponentProps> {

  componentDidMount(){
    //this.props.actions.getEmployeeData(this.props.match.params.id);

    console.log(this.props.match.params.id);
  }
  render() {
    return (
      <div className="add-container">
        <h2 className="header-wrapper">Add Employee</h2>
        <div className="l-container">
          <div className="l-wrapper">

            <TextBoxComponent
              label="Name"
              name="Name"
              type="text"
              focus={true}
              placeholder="Enter Name"
              // value={this.state.userName}
              // onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Username"
              name="userName"
              type="text"
              placeholder="Enter Username"
              // value={this.state.userName}
              // onChange={this.handleChange}
            />
            <TextBoxComponent
              label="Email"
              name="email"
              type="text"
              placeholder="Enter Email"
              // value={this.state.passWord}
              // onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Phone"
              name="phone"
              type="text"
              placeholder="Enter Phone"
              // value={this.state.passWord}
              // onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Website"
              name="website"
              type="text"
              placeholder="Enter Website"
              // value={this.state.passWord}
              // onChange={this.handleChange}
            />

            <button className="btn-save">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeComponent;
