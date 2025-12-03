// import { Link, Route, Routes } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
// import Home from "./nested-routing/pages/Home";
// import About from "./nested-routing/pages/About";
// import './App.css'
// import Home from './react-router-dom/Home'
// import About from './react-router-dom/About'
// import AddTodo from './hw/AddTodo'
// import { TodoProvider } from './hw/TodoContext'
// import TodoList from './hw/TodoList'
// import { UserApiProvider } from './functional-components/hooks/useContext-Hook/user-list/UserApiContext'
// import UserList from './functional-components/hooks/useContext-Hook/user-list/UserList'
// import Home from './functional-components/hooks/useContext-Hook/dark&light-mode/Home'
// import { ThemeProvider } from './functional-components/hooks/useContext-Hook/dark&light-mode/ThemeContext'
// import Unmount from './functional-components/hooks/useEffect-Hook/life-cycle-methods/Unmount'
// import Update from './functional-components/hooks/useEffect-Hook/life-cycle-methods/Update'
// import Mount from './functional-components/hooks/useEffect-Hook/life-cycle-methods/Mount'
// import ToggleButton from './functional-components/hooks/useState-Hook/ToggleButton'
// import NameForm from './functional-components/hooks/useState-Hook/NameForm'
// import Timer from './functional-components/hooks/useEffect-Hook/Timer'
// import UserList from './functional-components/hooks/useEffect-Hook/UserList'
// import Props from './functional-components/Props'
// import State from './functional-components/State'
// import State_hw from './functional-components/State_hw'
// import Basic from './class-components/basic'
// import CallingFunction from './embedding-expression/callingFunction'
// import Conditional from './embedding-expression/Conditional'
// import RenderingLists from './embedding-expression/RenderingLists'
// import Basics from './functional-components/basics'
// import Player from "./functional-components/hooks/useRef-Hook/Player"
// import AxiosGet from "./axios/AxiosGet"
// import AxiosPost from "./axios/AxiosPost"
// import Crud from "./local-storage/Crud"
// import { Form } from "react-router-dom"
// import Crud from "./local-storage/Crud"
// import SimpleForm from "./form/SimpleForm"
// import Items from "./react-keys/Items"
// import RealWorld from "./react-keys/RealWorld"
// import Navbar from "./nested-routing/Navbar"
// import Home from './nested-routing/pages/Home';
// import About from './nested-routing/pages/About';
// import Service from './nested-routing/pages/Service';
// import WebDev from './nested-routing/service/WebDev';
// import AppDev from './nested-routing/service/AppDev';
// import Design from './nested-routing/service/Design';
// import { Route, Routes } from "react-router-dom"
// import Product from "./dynamic-routing/Product"
// import ProductDetailPage from "./dynamic-routing/ProductDetailPage"
// import ProductCard from "./design/dynamic-routing-RW-eg/ProductPage"
// import ProductPage from "./designs/dynamic-routing-example/ProductPage"
// import UseLayoutEffect from "./functional-components/hooks/useEffect-Hook/UseLayoutEffect"
// import Counter from "./functional-components/hooks/useReducer-Hook/Counter"
// import { Route, Routes } from "react-router-dom"
// import Child from "./functional-components/hooks/useCallBack-Hook/Child"
// import Parent from "./functional-components/hooks/useCallBack-Hook/Parent"
// import UseMemo from "./functional-components/hooks/useMemo-Hook/UseMemo"
// import { Route, Routes } from "react-router-dom"
// import ProductPage from "./design/dynamic-routing-RW-eg/ProductPage"
// import ProductDetails from "./design/dynamic-routing-RW-eg/ProductDetails"
// import BasicHookForm from "./react-hook-form/BasicHookForm"
// import WorkForm from "./react-hook-form/WorkForm"
// import YupForm from "./form/yup-react-hook-form/YupForm"
// import CartApp from "./functional-components/hooks/useContext-Hook/cartcontext/cart-components/CartApp"
// import ShoppingCart from "./functional-components/hooks/useReducer-Hook/cart-using-reducer/components/ShoppingCart"


function App() {

  return (
    <>
      {/* -----embedding-expression----- */}
      {/* <Welcome/> */}
      {/* <CallingFunction/> */}
      {/* <Conditional/> */}
      {/* <RenderingLists/> */}

      {/* -----functional-components----- */}
      {/* <Basics/> */}
      {/* <State/> */}
      {/* <State_hw/> */}
      {/* <Props/> */}

      {/* -----hooks & lifecycle methods----- */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <NameForm/> */}
      {/* <ToggleButton/> */}
      {/* <Mount/> */}
      {/* <Update/> */}
      {/* <Unmount/> */}

      {/* -----usecontext hook----- */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}
      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}

      {/* -----useref hook----- */}
      {/* <Player/> */}

      {/* -----useeffect hook----- */}
      {/* <UseLayoutEffect/> */}

      {/* -----usereducer hook----- */}
      {/* <Counter/> */}
      {/* <ShoppingCart/> */}

      {/* -----usecallback hook----- */}
      {/* <Parent/> */}
      {/* <Child/> */}

      {/* -----usememo hook----- */}
      {/* <UseMemo/> */}

      {/* -----hw----- */}
      {/* <TodoProvider>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
          <h2>📝Todo App</h2>
          <AddTodo/>
          <TodoList/>
        </div> 
      </TodoProvider> */}

      {/* -----1.react-router-dom----- */}
      {/* ---basic--- */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link> <br />
          <Link to='/about'>About</Link>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes> */}

      {/* -----2.dynamic routing----- */}
      {/* <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
      </Routes> */}

      {/* -----3.nested routing----- */}
      {/* <Navbar/>
      <div className="container-app">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route> */}

          {/* nested routing starts here */}
          {/* <Route path='/service' element={<Service/>}>
          <Route path='web-development' element={<WebDev/>}/>
          <Route path='app-development' element={<AppDev/>}/>
          <Route path='design' element={<Design/>}/>
          </Route>
        </Routes>
      </div>  */}

      {/* -----react keys----- */}
      {/* <Items/> */}
      {/* <RealWorld/> */}

      {/* -----form----- */}
      {/* <SimpleForm/> */}
      {/* <Form/> */}

      {/* ----Local storage----- */}
      {/* <Crud/> */}

      {/* -----Axios----- */}
      {/* <AxiosPost/> */}
      {/* <AxiosGet/> */}

      {/* -----dynamic routing----- */}
      {/* <ProductPage/> */}
      {/* <Routes>
        <Route path="/" element={<ProductPage/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes> */}

      {/* react-hook-form */}
      {/* <BasicHookForm/> */}
      {/* <WorkForm/> */}
      {/* <YupForm/> */}

      {/* <CartApp/> */}
    </>
  )
}

export default App

// Class Components
// import React, { Component } from 'react'
// import Basic from './class-components/basic'
// import UsingProps from './class-components/UsingProps'
// import Counter from './class-components/Counter'
// import Mounting from './class-components/lifecycle-methods/Mounting'
// import Update from './class-components/lifecycle-methods/Update'
// import Counter_homework from './class-components/Counter_homework'
// import UnMount from './class-components/lifecycle-methods/UnMount'
// import Update_hw from './class-components/lifecycle-methods/Update_hw'
// import ButtonUnMount from './class-components/lifecycle-methods/ButtonUnmount'
// import Timer from './class-components/lifecycle-methods/Timer'
 
//  export default class App extends Component {
//    render() {
//      return (
//        <div>
//          {/* <Basic/> */}
//          {/* <UsingProps name = "Salman"/> */}
//          {/* <Counter/> */}
//          {/* <Mounting/> */}
//          {/* <Update/> */}
//          {/* <Counter_homework/> */}
//          {/* <UnMount/> */}
//          {/* <Update_hw/> */}
//          {/* <ButtonUnMount/> */}
//          <Timer/>
//        </div>
//      )
//    }
//  }
 
