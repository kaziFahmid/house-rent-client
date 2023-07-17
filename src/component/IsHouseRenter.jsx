
import React, { useContext }  from 'react'

import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from './AuthProvider';
import useHouseOwner from './hooks/useHouseOwner';


export default function IsHouseRenter({children}) {
    const{currentUser}=useContext(AuthContext)
    let location = useLocation();
    const[allusers]=useHouseOwner()
    if(allusers.find((x)=>x?.email===currentUser?.email)?.role==="house renter"){
        return children
    }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
