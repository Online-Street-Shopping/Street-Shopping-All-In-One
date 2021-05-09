import React, { Component } from 'react'

export default class SubUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            subscription: []
        }
    }


    async componentDidMount() {
        const url = 'https://street-shopping-2.herokuapp.com/api/subscriptions';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            subscription: data,
            loading: false
        })
    }


    render() {
        if (this.state.loading) {
            return <div>...Loading</div>
        }
        if (!this.state.subscription) {
            return <div>No Record for Updation</div>
        }

        const updateData

        return (
            <div>
                <form>

                </form>
            </div>
        )
    }
}
