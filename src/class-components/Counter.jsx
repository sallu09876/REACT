import React, { Component } from 'react'

export default class Counter extends Component {

    // step-1 : Initialize state
    constructor(props){ //accept props as a parameter
        super(props); //used to invoke parent component
        this.state = { count : 0 };
    }

    // step-2 : Define methods o modify state
    increment = () => {
        this.setState({ count : this.state.count + 1 });
    }
    decrement = () => {
        this.setState({ count : this.state.count - 1 });
    }
  
    // step-3 : Render UI
  render() {
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
