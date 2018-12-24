// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Employee } from "../../models/employee";
import * as interceptor from "../../utils/interceptor";
import * as employeeActions from "../../actions/employeeActions";

interface IListComponentProps {
  employeesResult: any;
  store: any;

  actions: any;
  history: any;
}

interface IListComponentState {
  employees: Array<Employee>;
}

class ListComponent extends React.Component<
  IListComponentProps,
  IListComponentState
> {
  constructor(props: IListComponentProps) {
    super(props);

    this.state = {
      employees: []
    };

    this.handleAddEmployee = this.handleAddEmployee.bind(this);
    this.handleViewEmployee = this.handleViewEmployee.bind(this);
  }

  componentDidMount() {
    this.props.actions.getEmployeesData().then(() => {
      interceptor.responseInterceptor(
        this.props.employeesResult,
        (employees: any) => {
          this.setState({ employees: employees });
        },
        () => {
          console.log("error occurred");
        }
      );
    });
  }

  handleAddEmployee() {
    this.props.history.push("/home/employee");
  }

  handleViewEmployee(id: any) {
    this.props.history.push("/home/employee/" + id);
  }

  render() {
    return (
      <div className="list-container">
        <h2 className="header-wrapper">Employee List</h2>
        <div>
          <button
            className="btn-add"
            onClick={() => {
              this.handleAddEmployee();
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
                <th>Phone</th>
                <th>Website</th>
                <th>Actions</th>
              </tr>

              {this.state.employees.map((employee: Employee, index) => (
                <tr
                  key={index}
                  onClick={() => this.handleViewEmployee(employee.id)}
                >
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.website}</td>
                  <td>
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
    employeesResult: state.employees,
    store: state
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(employeeActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
