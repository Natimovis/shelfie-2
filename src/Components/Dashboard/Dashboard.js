import React, { Component } from 'react';
import Product from "../Product/Product";

export class Dashboard extends Component {
    render() {
            console.log(this.props.inventory)
        let mappedInventory = this.props.inventory.map((val, index) => {
            return (
                <Product key={index} val={val} inventory={this.props.inventory} />
                )
        })

        return (
            <div>
                Dashboard
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard
