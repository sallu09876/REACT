import React, { useState } from 'react'

const State_hw = () => {

    //state initializing using setState
    const [time, setTime] = useState(0);

    //function to incriment timer
    const incrementTime = () => {
        setTime(time + 1);
    }

    //function to decriment timer
    const decrementTime = () => {
        if (time > 0) {
            setTime(time - 1);
        }
    }

  return (
    <div>
        <h1>Time: {time} seconds</h1>
        <button onClick={incrementTime}>Increment Time +</button>
        <br />
        <br />
        <button onClick={decrementTime}>Decrement Time -</button>
    </div>
  )
}

export default State_hw
