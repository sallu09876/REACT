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
import Mounting from './class-components/lifecycle-methods/Mounting'
import Update from './class-components/lifecycle-methods/Update'
import Counter_homework from './class-components/Counter_homework'
import UnMount from './class-components/lifecycle-methods/UnMount'
import Update_hw from './class-components/lifecycle-methods/Update_hw'
import ButtonUnMount from './class-components/lifecycle-methods/ButtonUnmount'
import Timer from './class-components/lifecycle-methods/Timer'
 
 export default class App extends Component {
   render() {
     return (
       <div>
         {/* <Basic/> */}
         {/* <UsingProps name = "Salman"/> */}
         {/* <Counter/> */}
         {/* <Mounting/> */}
         {/* <Update/> */}
         {/* <Counter_homework/> */}
         {/* <UnMount/> */}
         {/* <Update_hw/> */}
         {/* <ButtonUnMount/> */}
         <Timer/>
       </div>
     )
   }
 }
 