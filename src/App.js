import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Axios from 'axios';

export class App extends Component {
    constructor() {
        super()

        this.state = {
            inventory: []
        };
        this.viewInventory=this.viewInventory.bind(this);
    }

    componentDidMount() {
        this.viewInventory();
    }
    viewInventory() {
        Axios.get('/api/inventory')
        .then(res => {
            this.setState({ inventory: res.data })
            console.log(res.data)
        })
    }



    render() {
        return (
            <div>
                <Header />
                <Dashboard viewInventory={this.viewInventory} inventory={this.state.inventory} />
                <Form viewInventory={this.viewInventory} />
                hello
            </div>
        )
    }
}

export default App;
