// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//
import TextBoxComponent from "../elements/TextBox";
import * as employeeActions from "../../actions/employeeActions";

import { Employee } from "../../model/employee";

interface IEmployeeComponentProps {
  employeeDetails: any;

  match: any;
  actions: any;
  result: any;
  response: any;
}

interface IEmployeeComponentState {
  employee: Employee;
}

class EmployeeComponent extends React.Component<
  IEmployeeComponentProps,
  IEmployeeComponentState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      employee: new Employee()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.actions.getEmployeeData(this.props.match.params.id).then(() => {
      console.log('my callbvack', this.props.employeeDetails)
        
    });

  }

  componentDidUpdate(prevProps: any) {
    // console.log('did update previous', prevProps  )
    // console.log("Did Update current", this.props.employeeDetails);
  }

  handleChange() {}

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
              value={this.state.employee.name}
              onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Username"
              name="userName"
              type="text"
              placeholder="Enter Username"
              value={this.state.employee.userName}
              onChange={this.handleChange}
            />
            <TextBoxComponent
              label="Email"
              name="email"
              type="text"
              placeholder="Enter Email"
              value={this.state.employee.email}
              onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Phone"
              name="phone"
              type="text"
              placeholder="Enter Phone"
              value={this.state.employee.phone}
              onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Website"
              name="website"
              type="text"
              placeholder="Enter Website"
              value={this.state.employee.website}
              onChange={this.handleChange}
            />

            <button className="btn-save">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    employeeDetails: state.employees.employeeDetails
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeComponent);
