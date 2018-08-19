// base
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Employee } from '../../models/employee';
import * as employeeActions from '../../actions/employeeActions';


interface IListComponentProps {
  employeesResult: any;
  
  actions: any;
  history: any;
}

interface IListComponentState {
   employees: Array<Employee>;
}

class ListComponent extends React.Component<IListComponentProps, IListComponentState> {
  constructor(props: IListComponentProps) {
    super(props);

    this.state = {
      employees: [],
    }

    this.addEmployee = this.addEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    this.props.actions.getEmployeesData().then(() => {
      let employeesObject = this.props.employeesResult.data;
      this.setState({ employees: employeesObject });
    });;

  }

  addEmployee() {
    this.props.history.push("/employee");
  }

  viewEmployee(id: any) {
    this.props.history.push("/employee/" + id);
  }

  render() {

    return (
      <div className="list-container">
        <h2 className="header-wrapper">Employee List</h2>
        <div>
          <button
            className="btn-add"
            onClick={e => {
              this.addEmployee();
            }}
          >
            Add Employee
          </button>
          <table className="table">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>

              {this.state.employees.map((employee: Employee, index) => (
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button className="btn-view" onClick={e => { this.viewEmployee(employee.id); }} > view </button>
                    <button className="btn-delete">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    employeesResult: state.employees
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
};

export default connect(mapStateToProps,  mapDispatchToProps)(ListComponent);
