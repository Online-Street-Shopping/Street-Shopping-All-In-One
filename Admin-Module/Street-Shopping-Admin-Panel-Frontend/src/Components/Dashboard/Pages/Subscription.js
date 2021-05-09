import React, { Component } from 'react'
import moment from "moment"
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./subscription.css";
// import { withRouter } from 'react-router-dom';

class Subscription extends Component {
    constructor(props) {
        super(props)
        // this.submitHandler = this.submitHandler.bind(this);

        this.state = {
            loading: true,
            subscription: [],
        }
    }

    async componentDidMount() {
        const url = 'https://street-shopping-2.herokuapp.com/api/subscriptions';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            subscription: data,
            loading: false,
            name: data[0].addedBy,
            subName: data[0].subscriptionName,
            price: data[0].subscriptionPrice,
            duration: data[0].duration
        })
    }

    render() {
        if (this.state.loading) {
            return <div>...Loading</div>
        }
        if (!this.state.subscription) {
            return <div>No Subscription Record</div>
        }

        const subData =
            this.state.subscription.map(sub => (
                <tr key={sub.subscriptionId}>
                    <td>{sub.addedBy}</td>
                    <td>{sub.subscriptionName}</td>
                    <td>{sub.subscriptionPrice}</td>
                    <td>{sub.duration}</td>
                    <td>{moment(sub.createdAt).format("DD-MM-YY")}</td>
                </tr>
            ));

        // function updateUser() {
        //     console.warn(name, this.state.subName, this.state.price);
        // }

        return (
            <div className="sub-listing">
                <h1>Subsciptions</h1>
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Subsciption</th>
                        <th>Price</th>
                        <th>Duration</th>
                        <th>Date</th>
                    </thead>
                    <tbody>
                        {subData}
                    </tbody>
                </Table>
            </div>
        )
    }
}

// export default withRouter(Subscription);
export default Subscription;