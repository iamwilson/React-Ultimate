// core
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router-dom';

// components
import AboutComponent from './about/about';
import HeaderComponent from './common/header';
import SidePanelComponent from './common/sidepanel';
import EmployeeComponent from './employee/employee';
import DepartmentComponent from './department/department';
import EmployeeListComponent from './employee/employeeList';

// misc
import { removeToken } from '../utils/tokenHelper';
import { PrivateRoute, PublicRoute } from '../utils/routingHelper';
import * as loginAction from '../actions/loginActions';
import Offer from './offer/offer';

interface IHomeProps {
    actions: any;
    history: any;
    language: any;
    isLoading: any;
}

interface IHomeState {
    openSideBar: boolean;
    isAuthenticated: boolean;
}

class HomeComponent extends React.Component<IHomeProps, IHomeState> {
    constructor(props: any) {
        super(props);
        this.state = {
            openSideBar: false,
            isAuthenticated: false
        };

        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleSideBar = this.handleSideBar.bind(this);
        this.handleCloseSideBar = this.handleCloseSideBar.bind(this);
    }

    handleLogOut() {
        this.props.actions.logoutUser();
        removeToken();
        this.props.history.replace('/login');
    }

    handleSideBar() {
        const isOpen = this.state.openSideBar === false ? true : false;
        this.setState({ openSideBar: isOpen });
    }

    handleCloseSideBar() {
        if (this.state.openSideBar === true) {
            this.setState({ openSideBar: false });
        }
    }

    render() {
        return (
            <div onClick={this.handleCloseSideBar}>
                <SidePanelComponent
                    openSideBar={this.state.openSideBar}
                    logOutUser={this.handleLogOut}
                    {...this.props}
                />
                <HeaderComponent
                    openSideBar={this.handleSideBar}
                    {...this.props}
                />
                <Switch>
                    <PublicRoute exact={true} path={'/home'} component={EmployeeListComponent} props={this.props} />
                    <PublicRoute path={'/home/about'} component={AboutComponent} props={this.props} />
                    <PublicRoute path={'/home/offer'} component={Offer} props={this.props} />
                    <PublicRoute path={'/home/employee/:id?'} component={EmployeeComponent} props={this.props} />
                    <PrivateRoute authenticated={true} path='/home/department' component={DepartmentComponent} />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.isLoading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(loginAction, dispatch)
    };
};

export default withRouter<any>(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomeComponent)
);
