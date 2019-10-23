import React, { Component } from 'react'

class Product extends Component {
    render() {

        console.log(this.props.val)
        return (
            <div>
                <div>{this.props.val.name}</div>
                <div>{this.props.val.price}</div>
                <div>{this.props.val.image}</div>
            </div>
        )
    }
}

export default Product;
