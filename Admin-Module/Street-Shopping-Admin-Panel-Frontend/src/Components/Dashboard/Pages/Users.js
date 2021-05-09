import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./User.css";

export default class Users extends Component {
    state = {
        loading: true,
        user: []
    }

    async componentDidMount() {
        const url = "https://street-shopping-2.herokuapp.com/api/user/users";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            user: data,
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <div>...Loading</div>
        }
        if (!this.state.user) {
            return <div>No User</div>
        }

        const userData =
            this.state.user.map(user => (

                <tr key={user.userId}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.emailId}</td>
                    <td>{user.contactNo}</td>
                </tr>

            ));

        return (
            <div className="user-listing">
                <h1>User List</h1>
                <Table>
                    <thead>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                    </thead>
                    <tbody>
                        {userData}
                    </tbody>
                </Table>
                
            </div>
        );
    }
}
