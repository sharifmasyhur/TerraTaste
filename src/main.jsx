import React, { useEffect, useState } from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"about",
    element: <About/>,
  },
  {
    path:"contact",
    element: <Contact/>,
  },
  {
    path:"explore",
    element: () => {
      window.location.href = "/Explore.html";
      return null;
    },
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


export default Main