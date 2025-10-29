import React from 'react'
import './Welcome.css'

const callingFunction = () => {
    function getGreeting(name) {
        return `Hello ${name}`;
    }

    function Greeting() {
        return <h2>{getGreeting("Salman")}</h2>;
    }
  return (
    <div>
      <Greeting />
    </div>
  )
}

export default callingFunction
