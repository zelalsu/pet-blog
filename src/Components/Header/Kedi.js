import React, { Component } from 'react'
import GetApi from './GetProduct';


export default class Kedi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        this.getProducts();
    }
    getProducts = () => {
        fetch("http://localhost:50103/api/ItemProps/")
            .then(response => response.json())
            .then(data => this.setState({ products: data }));;
    }
    render() {   
        return (
            <div >
              <GetApi product={this.state.products} />
            </div >
        );
    }
}



