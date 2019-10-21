import React, { Component } from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

export class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inventory: [
                // {
                //     "Name": "Akira",
                //     "Price": "5$",
                //     "Image": "img1",
                // },
                // {
                //     "Name": "Harry",
                //     "Price": "6$",
                //     "Image": "img2",
                // },
                // {
                //     "Name": "Sherlock",
                //     "Price": "7$",
                //     "Image": "img3"
                // }
            ]
        };
    }
    
    

    render() {
        return (
            <div>
                <Header />
                <Dashboard inventory={ this.state.inventory } />
                <Form />
            </div>
        )
    }
}

export default App;
