import React, { Component } from 'react';
import Product from "../Product/Product";
import Axios from 'axios';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inventory: []
        }
    }
    
    

    handleDelete = ( id ) => {
        // e.preventDefault();
        Axios.delete(`/api/product/${id}`).then(res => {
            this.setState({ inventory: res.data})
            console.log(res.data)
            this.props.viewInventory()
            console.log(res.data)
        })
    }
    render() {
       

        

        // console.log(this.props.inventory)
        let mappedInventory = this.props.inventory.map((val, index) => {
            return (
                <Product handleDelete={this.handleDelete} id={this.id} key={index} val={val} inventory={this.props.inventory} />
            )
        })


        return (
            <div>
                {mappedInventory}
                {/* <Product handleDelete={this.props.handleDelete} /> */}
            </div>
        )
    }
}

export default Dashboard
