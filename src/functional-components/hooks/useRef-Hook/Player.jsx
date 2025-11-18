import React, { useRef, useState } from 'react'

function Player () {
    var playerRef = useRef();

    const [player, setPlayer] = useState("");

    function handleButtonClick () {
        setPlayer(playerRef.current.value)
        playerRef.current.value = ""
    }
  return (
    <div>
      <section id='player'>
        <h2>Hello {player ?? "User"} !</h2>
        <p>
            <input ref={playerRef} type="text" />
            <button onClick={handleButtonClick}>Set Name</button>
        </p>
      </section>
    </div>
  )
}

export default Player
