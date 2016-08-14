import React, { Component } from 'react';
import { get } from '../services/match';
import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {
            dota: {}
        };
    }

    componentDidMount() {
        return get('2569610900').then(function(response) {
            console.log(response.match);
            this.setState({
                dota: response.match
            })
        })
    }

  render() {
    const {dota} = this.state;

    return (
        <div>
            <h1>{dota.cluster}</h1>
            
        </div>
    );
  }
}

export default App;
