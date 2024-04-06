
import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Product from './components/product'

import axios from 'axios'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";

import { productsData } from './Api/api'

const Layout = () =>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <ScrollRestoration/>
      <Footer/>
    </div>
  )
}

const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: productsData
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/Cart",
        element:<Cart/>,
      }
    ],
  },
]);
function App() {

  return (

    <div className="font-bodyFont">

        <RouterProvider router={router}/>
    </div>
  )
}

export default App
