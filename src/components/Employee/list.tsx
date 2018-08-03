// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as employeeActions from "../../actions/employeeActions";

interface IListComponentProps {
  employees: any;
  isLoading: any;
  error: any;

  actions: any;
  history: any;
}

class ListComponent extends React.Component<IListComponentProps> {
  constructor(props: IListComponentProps) {
    super(props);

    this.addEmployee = this.addEmployee.bind(this);
    this.viewEmployee = this.viewEmployee.bind(this);
  }

  componentDidMount() {
    this.props.actions.getEmployeesData();
  }

  addEmployee() {
    this.props.history.push("/employee");
  }

  viewEmployee(id: any) {
    this.props.history.push("/employee/" + id);
  }

  render() {

    let isEmpty = Object.keys(this.props.error).length === 0;

    if (!isEmpty) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading ...</p>;
    }

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

              {this.props.employees.map((employee: any, index: any) => (
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
    employees: state.employees.employees,
    isLoading: state.employees.isLoading,
    error: state.employees.error
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
)(ListComponent);
