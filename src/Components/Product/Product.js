import React, { Component } from 'react'

class Product extends Component {
    render() {

        const { handleDelete } = this.props;
        const { id } = this.props.val


        console.log(this.props.val.test_name)
        return (
            <div>
                <p>{this.props.val.test_name}</p>
                <p>${this.props.val.test_price}</p>
                <img src={this.props.val.test_image_url} alt="oops"/>
                <button onClick={ () => handleDelete( id ) }>
                    Delete
                </button>
            </div>
        )
    }
}

export default Product;
