import React, { Component } from 'react'

export class Form extends Component {
    constructor() {
        super()
    
        this.state = {
            name: "",
            price: "",
            image: ""
        }
    }

    handleNameChange = e => {
        this.setState({name: e.target.value})
        console.log(this.state.name)
    }

    handlePriceChange = e => {
        this.setState({price: e.target.value})
        console.log(this.state.price)
    }

    handleImageChange = e => {
        this.setState({image: e.target.value})
        console.log(this.state.image)
    }

    handleAddClick = e => {
        
    }

    handleCancelClick = (e) => {
        e.preventDefault();
        this.setState({
            name: "",
            price: "",
            image: ""
        })
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <form>
                <input placeholder="Name" onChange={this.handleNameChange} />
                <input placeholder="Price" onChange={this.handlePriceChange} />
                <input placeholder="Image URL" onChange={this.handleImageChange} />
                <button onClick={this.handleCancelClick}>Cancel </button>
                <button onClick={this.handleAddClick}>Add </button>
                </form>
                Form
            </div>
        )
    }
}

export default Form;
