// import React, { useContext } from 'react'
// import { ThemeContext } from './ThemeContext'

// const Home = () => {

//     const {darkMode , toggleTheme} = useContext(ThemeContext);

//   return (
//     <div>
//       <h1>{ darkMode ? 'Dark Mode 🌙' : 'Light Mode ☀' }</h1>
//       <button onClick={toggleTheme} style={{cursor:'pointer'}}>Toggle Theme</button>
//     </div>
//   )
// }

// export default Home 

import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Home = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : '#f9f9f9',
        color: darkMode ? '#fff' : '#000',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.3s ease'
      }}
    >
      <h1>{darkMode ? 'Dark Mode 🌙' : 'Light Mode ☀'}</h1>

      {/* Toggle Button */}
      <label
        style={{
          position: 'relative',
          display: 'inline-block',
          width: '60px',
          height: '34px',
          marginTop: '15px',
        }}
      >
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
          style={{
            opacity: 0,
            width: 0,
            height: 0,
          }}
        />
        <span
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: darkMode ? '#000000ff' : '#ccc',
            transition: '.4s',
            borderRadius: '34px',
          }}
        >
          <span
            style={{
              position: 'absolute',
              height: '26px',
              width: '26px',
              left: darkMode ? '30px' : '4px',
              bottom: '4px',
              backgroundColor: 'white',
              transition: '.4s',
              borderRadius: '50%',
            }}
          ></span>
        </span>
      </label>
    </div>
  );
};

export default Home;