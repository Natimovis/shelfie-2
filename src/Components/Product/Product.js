import React, { Component } from 'react'

class Product extends Component {
    render() {

        console.log(this.props.val)
        return (
            <div>
                <div>{this.props.val.Name}</div>
                <div>{this.props.val.Price}</div>
                <div>{this.props.val.Image}</div>
            </div>
        )
    }
}

export default Product;
