// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//
import { Employee } from "../../models/employee";
import TextBoxComponent from "../elements/textBox";
import * as employeeActions from "../../actions/employeeActions";
import * as validation from "../../utils/validations";

interface IEmployeeComponentProps {
  employeeResult: any;
  match: any;
  actions: any;
  result: any;

}

interface IEmployeeComponentState {
  employee: Employee;
  errors: Employee;
  isUpdate: boolean;
}

class EmployeeComponent extends React.Component<IEmployeeComponentProps, IEmployeeComponentState> {

  constructor(props: any) {
    super(props);

    this.state = {

      employee: new Employee(),
      errors: new Employee(),
      isUpdate: false

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    const isAdd = this.props.match.params.id === undefined ? false : true;
    if (isAdd) {
      this.props.actions.getEmployeeData(this.props.match.params.id).then(() => {
          const employeeObject = this.props.employeeResult.data;
          this.setState({ isUpdate: true, employee: employeeObject });
        });
    }
  }

  handleChange(e: any) {
    const key = e.target.name;
    const value = e.target.value;

    this.validateFields(key, value);
    const empObject: Employee = {...this.state.employee};
    empObject[key] = value;
    this.setState({ employee: empObject });

  }

  validateFields(key: any, value: any) {
    const errors = new Employee();

    switch (key) {
      case "name":
        if (!validation.IsInputNotNull(value)) { errors.name = "Please enter name"; }
        break;

      case "username":
        if (!validation.IsInputNotNull(value)) { errors.username = "Please enter username"; }
        break;

      case "email":
        if (!validation.IsEmailValid(value)) { errors.email = "Please enter a valid email"; }
        break;

      case "phone":
        if (!validation.IsInputNotNull(value)) { errors.phone = "Please enter phone number"; }
        break;

      case "website":
        if (!validation.IsWebValid(value)) { errors.website = "Please enter a valid website"; }
        break;

      default: break;

    }

    const errorObject = { ...this.state.errors, [key]: errors[key] };
    this.setState({ errors: errorObject });

  }

  handleSubmit() {
    this.props.actions.addEmployee(this.state.employee);
  }

  render() {
    const hasError = Object.keys(this.state.errors).some((key) => this.state.errors[key] !== "");
    const areEmpty = Object.keys(this.state.employee).some((key) => this.state.employee[key] === "");
    return (
      <div className="employee-container">
        <h2 className="header-wrapper">Employee Details</h2>
        <div className="employee-wrapper">
          <div className="l-wrapper">
            <form onSubmit={this.handleSubmit}>
              <TextBoxComponent
                label="Name:"
                name="name"
                type="text"
                focus={true}
                placeholder="Enter Name"
                value={this.state.employee.name}
                error={this.state.errors.name}
                onChange={this.handleChange}/>

              <TextBoxComponent
                label="Username:"
                name="username"
                type="text"
                placeholder="Enter Username"
                value={this.state.employee.username}
                error={this.state.errors.username}
                onChange={this.handleChange} />

              <TextBoxComponent
                label="Email:"
                name="email"
                type="text"
                placeholder="Enter Email"
                value={this.state.employee.email}
                error={this.state.errors.email}
                onChange={this.handleChange} />

              <TextBoxComponent
                label="Phone:"
                name="phone"
                type="text"
                placeholder="Enter Phone"
                value={this.state.employee.phone}
                error={this.state.errors.phone}
                onChange={this.handleChange} />

              <TextBoxComponent
                label="Website:"
                name="website"
                type="text"
                placeholder="Enter Website"
                value={this.state.employee.website}
                error={this.state.errors.website}
                onChange={this.handleChange} />

              {this.state.isUpdate === true ? (
                <button className="btn-save">Update</button>
              ) : (
                <button className="btn-add" type="submit" disabled={hasError || areEmpty}>Add </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    employeeResult: state.employee
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (EmployeeComponent);
