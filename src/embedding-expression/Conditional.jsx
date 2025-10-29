import React from 'react'

const Conditional = () => {
    const isLoggedIn = true;
  return (
    <div>
        <p>{isLoggedIn ? "Welcome back !" : "Please sign in"}</p>
    </div>
  )
}

export default Conditional

