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
import AddNewHouse from './component/Dashboard/AddNewHouse/AddNewHouse';
import OwnedHouses from './component/Dashboard/OwnedHouses/OwnedHouses';
import ManageBookings from './component/Dashboard/ManageBookings/ManageBookings';
import { AuthProvider } from './component/AuthProvider';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import EditHouse from './component/EditHouse/EditHouse';
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
 children:[
  {
    path: "/dashboard/houseowner/add-new-house",
    element: <AddNewHouse/>,
  },
  {
    path: "/dashboard/houseowner/edit-house/:id",
    element: <EditHouse/>,
    loader:({params})=> fetch(`http://localhost:5000/houses/${params.id}`)
  },
  {
    path: "/dashboard/houseowner/owned-houses",
    element: <OwnedHouses/>,
  },
   {
    path: "/dashboard/houserenter/manage-bookings",
    element: <ManageBookings/>,
  }
 ]
 

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

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider> <RouterProvider router={router} /></AuthProvider>
     </QueryClientProvider>
  </React.StrictMode>,
)
