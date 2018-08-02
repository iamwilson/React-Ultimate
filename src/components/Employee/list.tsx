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

    this.showDetails = this.showDetails.bind(this);
  }

  componentWillMount() {}
  componentDidUpdate() {}

  componentDidMount() {
    this.props.actions.getEmployeesData();
  }

  showDetails(id: any) {
    this.props.history.push("/employee/" + id);
  }

  render() {
    if (this.props.error) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="list-container">
        <h2 className="header-wrapper">Employee List</h2>
        <div>
          <table className="table">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>

              {this.props.employees.map((employee: any, index: any) => (
                <tr
                  key={index}
                  onClick={e => {
                    this.showDetails(employee.id);
                  }}
                >
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
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
