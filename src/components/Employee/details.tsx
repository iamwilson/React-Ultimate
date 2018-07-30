// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as employeeActions from "../../actions/Employee/employeeActions";

interface IDetailsComponentProps {
  employeeDetails: any;

  match: any;
  actions: any;
}

class DetailsComponent extends React.Component<IDetailsComponentProps> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getEmployeeData(this.props.match.params.id);
  }

  render() {
    return (
      <div className="details-container">
        <h2>Details</h2>
        <table className="table">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th> 
              <th>Email</th>
              <th>Phone</th>
            </tr>

            {this.props.employeeDetails.map((employee: any, index: any) => (
              <tr key={index}>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);
