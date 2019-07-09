// core
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// misc
import { Employee } from '../../models/employee';
import * as employeeActions from '../../actions/employeeActions';

interface IEmployeeListComponentProps {
    actions: any;
    history: any;
    language: any;
    employeesResult: any;
}

interface IEmployeeListComponentState {
    employees: Array<Employee>;
}

class EmployeeListComponent extends React.Component<
    IEmployeeListComponentProps,
    IEmployeeListComponentState
> {
    constructor(props: IEmployeeListComponentProps) {
        super(props);

        this.state = {
            employees: []
        };

        this.handleAddEmployee = this.handleAddEmployee.bind(this);
        this.handleViewEmployee = this.handleViewEmployee.bind(this);
    }

    componentDidMount() {
        this.props.actions.getEmployeesData().then(() => {
            const employeesObject = this.props.employeesResult.data;
            this.setState({ employees: employeesObject });
        });
    }

    handleAddEmployee() {
        this.props.history.push('/home/employee');
    }

    handleViewEmployee(id: any) {
        this.props.history.push('/home/employee/' + id);
    }

    render() {
        return (
          <div className='list-container'>
            <h2 className='header-wrapper'>{this.props.language.employeeComponent.title}</h2>
            <div>
              <button className='btn btn-add' onClick={(e) => { this.handleAddEmployee(); }} >{this.props.language.buttons.newEmployee} </button>
              <table className='table'>
                <tbody>
                  <tr>
                    <th>{this.props.language.employeeComponent.id}</th>
                    <th>{this.props.language.employeeComponent.name}</th>
                    <th>{this.props.language.employeeComponent.username}</th>
                    <th>{this.props.language.employeeComponent.email}</th>
                    <th>{this.props.language.employeeComponent.website}</th>
                    <th>{this.props.language.employeeComponent.action}</th>
                  </tr>

                  {this.state.employees.map((employee: Employee, index) => (
                    <tr key={index} onClick={() => this.handleViewEmployee(employee.id)}>
                      <td>{employee.id}</td>
                      <td>{employee.name}</td>
                      <td>{employee.username}</td>
                      <td>{employee.email}</td>
                      <td>{employee.website}</td>
                      <td>
                        <button className='btn btn-delete'>{this.props.language.buttons.delete}</button>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeListComponent);
