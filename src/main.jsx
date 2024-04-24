import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Obrigado from './Obrigado.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/obrigado",
    element: <Obrigado/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
