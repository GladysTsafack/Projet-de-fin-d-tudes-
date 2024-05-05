import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './page/login.jsx'
import Register from './page/register.jsx'
import Accueil from './page/accueil.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";
import Activites from './page/activites.jsx'

const router=createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },

  {
    path: "register",
    element: <Register/>
  },

  {
    path: "/",
    element: <Accueil/>
  },

  {
    path: "activites",
    element: <Activites/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
