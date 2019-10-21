import React, { Component } from 'react';
import Product from "../Product/Product";

export class Dashboard extends Component {
    render() {
        console.log(this.props.inventory)

        let mappedInventory = this.props.inventory.map((val, index) => {
            return (
                <Product key={index} val={val} />
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
