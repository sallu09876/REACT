import React, { Component } from 'react'

export default class Update extends Component {

    constructor(props) {
        super(props);
        this.state = { count : 0 }
    }

    increment = () => {
        this.setState({ count : this.state.count + 1 });
    }

    componentDidUpdate(prevState) { //prevstate is the props and state of the component before the update
        if(prevState.count !== this.state.count) {
            console.log(`Component updated! New Count : ${this.state.count}`);
            
        }
    }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
