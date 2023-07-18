import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useHouseOwner from './hooks/useHouseOwner';
import { AuthContext } from './AuthProvider';

export default function OwnerRoute({children}) {
    const{currentUser}=useContext(AuthContext)
    let location = useLocation();
    const[allusers]=useHouseOwner()
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
     
      const delay = setTimeout(() => {
        setIsLoading(false); 
      }, 1000); 
  

      return () => clearTimeout(delay);
    }, []);
  
    if (isLoading) {
     
      return <div>Loading...</div>;
    }
    if(allusers.find((x)=>x?.email===currentUser?.email)?.role==="house owner"){
        return children
    }
      return <Navigate to='/' state={{ from: location }} replace></Navigate>
}
