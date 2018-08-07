// base
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//
import { Employee } from "../../models/employee";
import TextBoxComponent from "../elements/textBox";
import * as employeeActions from "../../actions/employeeActions";

interface IEmployeeComponentProps {
  employeeDetails: any;

  match: any;
  actions: any;
  result: any;
  response: any;
  isUpdate: boolean
}

interface IEmployeeComponentState {
  employee: Employee;
  isUpdate?: boolean;
}

class EmployeeComponent extends React.Component<IEmployeeComponentProps, IEmployeeComponentState> {
  constructor(props: any) {
    super(props);

    this.state = {
      employee: new Employee(),
      isUpdate: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let isAdd = this.props.match.params.id === undefined ? false : true;   

    if (isAdd) {
      this.props.actions.getEmployeeData(this.props.match.params.id).then(() => {
          let employeeObject = this.props.employeeDetails.data[0];
          this.setState({ 
            isUpdate: true,
            employee: employeeObject
           });
        });
    }
  }

  componentWillReceiveProps(nextProps: any) {
    //let employeeObject = nextProps.employeeDetails.data[0];
    //console.log("next props", employeeObject);
    //this.setState({employee : employeeObject })
  }

  componentDidUpdate(prevProps: any) {
    // console.log('did update previous', prevProps  )
    // console.log("Did Update current", this.props.employeeDetails);
  }

  handleChange() {}

  render() {
    return (
      <div className="employee-container">
        <h2 className="header-wrapper">Employee Details</h2>
        <div className="employee-wrapper">
          <div className="l-wrapper">
            <TextBoxComponent
              label="Name"
              name="Name"
              type="text"
              focus={true}
              placeholder="Enter Name"
              value={this.state.employee.name || ''}
              onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Username"
              name="userName"
              type="text"
              placeholder="Enter Username"
              value={this.state.employee.userName || ''} 
              onChange={this.handleChange}
            />
            <TextBoxComponent
              label="Email"
              name="email"
              type="text"
              placeholder="Enter Email"
              value={this.state.employee.email || ''}
              onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Phone"
              name="phone"
              type="text"
              placeholder="Enter Phone"
              value={this.state.employee.phone || ''}
              onChange={this.handleChange}
            />

            <TextBoxComponent
              label="Website"
              name="website"
              type="text"
              placeholder="Enter Website"
              value={this.state.employee.website || ''}
              onChange={this.handleChange}
            />

            {
              (this.state.isUpdate == true) ?  <button className="btn-save">Update</button> : <button className="btn-add">Add</button>
            
            }
      
          
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

export default connect( mapStateToProps, mapDispatchToProps)(EmployeeComponent);
