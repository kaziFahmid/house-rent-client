import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Home from './component/Home/Home';
import Login from './component/Registrations/Login';
import Signup from './component/Registrations/Signup';
import axios from 'axios';
import Dashboard from './component/Dashboard/Dashboard';
axios.defaults.baseURL=`http://localhost:5000/`
axios.interceptors.request.use((req)=>{return req})
axios.interceptors.response.use((res)=>{return res.data})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {  
         path: "/",
      element: <Home/>,

      },
    
    ]
  },
  {  
    path: "/dashboard",
 element: <Dashboard/>,
 

 },

  {  
    path: "/login",
 element: <Login/>,

 },

 {  
  path: "/signup",
element: <Signup/>,

},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
