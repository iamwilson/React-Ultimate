// base
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//
import { Employee } from '../../models/employee';
import TextBoxComponent from '../elements/textBox';
import * as employeeActions from '../../actions/employeeActions';

interface IEmployeeComponentProps {
  employeeResult: any;

  match: any;
  actions: any;
  result: any;

}

interface IEmployeeComponentState {
  employee: Employee;
  isUpdate: boolean;
  isFormValid: boolean;

  isNameValid: boolean; 
  
  nameError: string;
  usernameError: string;
  emailError: string;
  phoneError: string;
  websiteError: string;

}

class EmployeeComponent extends React.Component<IEmployeeComponentProps, IEmployeeComponentState> {

  constructor(props: any) {
    super(props);

    this.state = {

      employee: new Employee(),
      isUpdate: false,
      isFormValid: false,
      isNameValid: false,

      nameError: '',
      usernameError: '',
      emailError: '',
      phoneError: '',
      websiteError: '',

    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    
  }

  componentDidMount() {
    let isAdd = this.props.match.params.id === undefined ? false : true;

    if (isAdd) {
      this.props.actions
        .getEmployeeData(this.props.match.params.id)
        .then(() => {
          let employeeObject = this.props.employeeResult.data;
          this.setState({ isUpdate: true, employee: employeeObject });
        });
    }
  }

  changeHandler(e: any) {
    let key = e.target.name;
    let value = e.target.value;

    this.validateFields(key, value);


    let empObject: Employee = Object.assign({}, this.state.employee);
    empObject[key] = value;

    this.setState({ employee: empObject });
  }

  nameFieldError: string = "Please enter name";
  
  validateFields(key, value){

    let error;

    switch(key){
      case 'name':
          error = (value.length < 4) ? this.nameFieldError : '';
        break;
      default: break;
    }

    this.setState({nameError : error});
    

  }

  submitHandler() {}

  addEmployeeHandler() {}

  render() {
    return (
      <div className="employee-container">
        <h2 className="header-wrapper">Employee Details</h2>
        <div className="employee-wrapper">
          <div className="l-wrapper">
            <form onSubmit={this.submitHandler}>
              <TextBoxComponent
                label="Name:"
                name="name"
                type="text"
                focus={true}
                placeholder="Enter Name"
                value={this.state.employee.name}
                error = {this.state.nameError}
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Username:"
                name="username"
                type="text"
                placeholder="Enter Username"
                value={this.state.employee.username}
                error = {this.state.usernameError}
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Email:"
                name="email"
                type="text"
                placeholder="Enter Email"
                value={this.state.employee.email}
                error = {this.state.emailError}
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Phone:"
                name="phone"
                type="text"
                placeholder="Enter Phone"
                value={this.state.employee.phone}
                error = {this.state.phoneError}
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Website:"
                name="website"
                type="text"
                placeholder="Enter Website"
                value={this.state.employee.website}
                error = {this.state.websiteError}
                onChange={ this.changeHandler } />

              {this.state.isUpdate == true ? (
                <button className="btn-save">Update</button>
              ) : (
                <button className="btn-add" type="submit">Add </button>
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
