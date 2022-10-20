import React, { Component } from 'react'
import GetProduct from '../Header/GetProduct';



export default class AnimalList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidUpdate() {
        this.getProducts();
    }
    componentDidMount() {
        this.getProducts();

    }
    getProducts = () => {
        fetch("http://localhost:50103/api/ItemProps/" + this.props.ItemId)
            .then(response => response.json())
            .then(data => this.setState({ products: data }));;
    }
    render() {
        return (
            <div >
                <GetProduct product={this.state.products} />
            </div >
        );
    }
}


