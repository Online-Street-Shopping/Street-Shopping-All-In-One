import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./products.css";

export default class Products extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            products: []
        }
    }

    async componentDidMount() {
        const url = 'https://street-shopping-2.herokuapp.com/api/products';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            products: data,
            loading: false
        })
    }

    render() {
        if (this.state.loading) {
            return <div>...Loading</div>
        }
        if (!this.state.products) {
            return <div>No Products</div>
        }

        const productData =
            this.state.products.map(prod => (
                <tr key={prod.productId}>
                    <td>{prod.productName}</td>
                    <td>{prod.description}</td>
                    <td>{prod.price}</td>
                    <td>{prod.stock}</td>
                </tr>
            ));

        return (
            <div className="product-listing">
                <h1>Products</h1>
                <Table>
                    <thead style={{ color: 'black' }}>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </thead>
                    <tbody>
                        {productData}
                    </tbody>
                </Table>
            </div>
        )
    }
}
