import React, { useState } from 'react'

const ToggleButton = () => {

    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <h2>Toggle Button!</h2>
            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? '🔊ON' : '🔇OFF'}
            </button>
        </div >
    )
}

export default ToggleButton
