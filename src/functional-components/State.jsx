import React, { useState } from 'react'

const State = () => {

    //state initializing using setState
    const [time, setTime] = useState(0);

    //function to incriment timer
    const incrementTime = () => {
        setTime(time + 1);
    }

  return (
    <div>
        <h1>Time: {time} seconds</h1>
        <button onClick={incrementTime}>Increment Time</button>
    </div>
  )
}

export default State
