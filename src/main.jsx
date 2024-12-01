import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Explore from './pages/Explore.jsx'

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
    element: <Explore/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

export default Main