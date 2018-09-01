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
  response: any;
  isUpdate: boolean;
}

interface IEmployeeComponentState {
  employee: Employee;
  isUpdate: boolean;
}

class EmployeeComponent extends React.Component<
  IEmployeeComponentProps,
  IEmployeeComponentState
> {
  constructor(props: any) {
    super(props);

    this.state = {
      employee: new Employee(),
      isUpdate: false
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.addEmployeeHandler = this.addEmployeeHandler.bind(this);
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

  componentDidUpdate(prevProps: any) {
    // console.log('did update previous', prevProps  )
  }

  changeHandler(e: any) {
    let key = e.target.name;
    let value = e.target.value;
    let empObject: Employee = Object.assign({}, this.state.employee);

    empObject[key] = value;

    this.setState({ employee: empObject }, () => {
      console.log(this.state.employee);
    });
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
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Username:"
                name="username"
                type="text"
                placeholder="Enter Username"
                value={this.state.employee.username}
                onChange={ this.changeHandler } />
              <TextBoxComponent
                label="Email:"
                name="email"
                type="text"
                placeholder="Enter Email"
                value={this.state.employee.email}
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Phone:"
                name="phone"
                type="text"
                placeholder="Enter Phone"
                value={this.state.employee.phone}
                onChange={ this.changeHandler } />

              <TextBoxComponent
                label="Website:"
                name="website"
                type="text"
                placeholder="Enter Website"
                value={this.state.employee.website}
                onChange={ this.changeHandler } />

              {this.state.isUpdate == true ? (
                <button className="btn-save">Update</button>
              ) : (
                <button
                  className="btn-add"
                  type="submit"
                  onClick={this.addEmployeeHandler}
                >
                  Add
                </button>
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
