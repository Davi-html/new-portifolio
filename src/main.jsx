import React from 'react'
import ReactDOM from 'react-dom/client'

import { Home } from './Page/Contact/Contact.jsx'
import { App } from './Page/App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>
  },
  {
    path: "/contact",
    element: < Home/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
