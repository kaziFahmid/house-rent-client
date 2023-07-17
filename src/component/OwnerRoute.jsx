import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import useHouseOwner from './hooks/useHouseOwner';
import { AuthContext } from './AuthProvider';

export default function OwnerRoute({children}) {
    const{currentUser}=useContext(AuthContext)
    let location = useLocation();
    const[allusers]=useHouseOwner()
    if(allusers.find((x)=>x?.email===currentUser?.email)?.role==="house owner"){
        return children
    }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
