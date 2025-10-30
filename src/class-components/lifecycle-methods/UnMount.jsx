import React, { Component } from 'react'

export default class UnMount extends Component {

  state = {
    time : 0
  };

  componentDidMount() {
    //start a timer when component mount 
    this.timer = setInterval ( () => {
      this.setState(prevState => ({
        time : prevState.time + 1
      }))
    }, 1000) 
  }

  componentWillUnmount() {
    //clean up the timer when the component unmount
    clearInterval(this.timer);
    console.log('Timer is cleaned up!');
    
  }
  render() {
    return (
      <div>
        <h1>Time : { this.state.time } seconds</h1>
      </div>
    )
  }
}
