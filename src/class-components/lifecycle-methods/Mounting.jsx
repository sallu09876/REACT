import React, { Component } from 'react'

export default class Mounting extends Component {

    componentDidMount () { //life cycle method, which is automatically called when the component mount
        console.log("Component Mounted!");
        
    }
  render() {
    return <p>Componnt has been mounted!</p>
  }
}
