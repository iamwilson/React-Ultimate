import * as React from 'react';

class Department extends React.Component {
    render() {
        return (
            <div className='about-container'>
                <h2 className='header-wrapper'>Departments</h2>
                <div>
                    <ul>Accounts</ul>
                    <ul>Finance</ul>
                    <ul>HR</ul>
                    <ul>Software</ul>
                </div>
            </div>
        );
    }
}

export default Department;
