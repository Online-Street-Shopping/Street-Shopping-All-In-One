import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./dboy.css";

export default class DeliveryBoy extends Component {
    state = {
        loading: true,
        deliveryBoy: []
    }

    async componentDidMount() {
        const url = "https://street-shopping-2.herokuapp.com/api/user/delivery-boys";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            deliveryBoy: data,
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <div>...Loading</div>
        }
        if (!this.state.deliveryBoy) {
            return <div>No Delivery Boys</div>
        }

        const dBoy =
            this.state.deliveryBoy.map(dBoy => (
                <tr key={dBoy.userId}>
                    <td>{dBoy.firstName}</td>
                    <td>{dBoy.lastName}</td>
                    <td>{dBoy.emailId}</td>
                    <td>{dBoy.contactNo}</td>
                </tr>
            ));

        return (
            <div className="dboy-listing">
                <h1>Delivery Boys</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dBoy}
                    </tbody>
                </Table>
            </div>
        );
    }
}
