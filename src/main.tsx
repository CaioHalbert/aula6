import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/index.tsx';
import About from './pages/About/index.tsx';
import Contacts from './pages/contacts/index.tsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:'/about',
    element: <About/>,
  },
  {
    path:"/contacts",
    element:<Contacts />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
