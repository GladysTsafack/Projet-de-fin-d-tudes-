import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './page/login.jsx'
import Register from './page/register.jsx'
import Accueil from './page/accueil.jsx'
import CategorieForm from './page/categorie/categorieform.jsx'
import UpdateCategorie from './page/categorie/updateCategorie.jsx'
import UpdateActivite from './page/activite/updateActvite.jsx'
import ActiviteForm from './page/activite/Activiteform.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
}from "react-router-dom";
import Activites from './page//activite/activites.jsx'
import Categories from './page/categorie/categorie.jsx'

const router=createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },

  {
    path: "register",
    element: <Register/>
  },

  {
    path: "accueil",
    element: <Accueil/>
  },

  {
    path: "activites",
    element: <Activites/>
  },
  {
    path:"categorie",
    element:<Categories/>
  },
  {
    path:"categorieForm",
    element:<CategorieForm/>
  },
  {
    path:"updateCategorie/:id",
    element:<UpdateCategorie/>
  },
  {
    path:"updateActivite/:id",
    element:<UpdateActivite/>
  },
  {
    path:"Activiteform",
    element:<ActiviteForm/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)
