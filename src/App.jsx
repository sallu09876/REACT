// import './App.css'
// import Basic from './class-components/basic'
// import CallingFunction from './embedding-expression/callingFunction'
// import Conditional from './embedding-expression/Conditional'
// import RenderingLists from './embedding-expression/RenderingLists'

// function App() {

//   return (
//     <>
      {/* -----embedding-expression----- */}
      {/* <Welcome/> */}
      {/* <CallingFunction/> */}
      {/* <Conditional/> */}
      {/* <RenderingLists/> */}
//     </>
//   )
// }

// export default App
 import React, { Component } from 'react'
 import Basic from './class-components/basic'
import UsingProps from './class-components/UsingProps'
import Counter from './class-components/Counter'
 
 export default class App extends Component {
   render() {
     return (
       <div>
         {/* <Basic/> */}
         {/* <UsingProps name = "Salman"/> */}
         {/* <Counter/> */}
       </div>
     )
   }
 }
 