import React, { useContext }  from 'react'

import { Navigate, useLocation } from 'react-router-dom'

import { AuthContext } from './AuthProvider';



export default function PrivateRoute({children}) {
const{currentUser}=useContext(AuthContext)
let location = useLocation();

if(currentUser){
    return children
}
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>
}
