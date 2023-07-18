import React, { useContext, useEffect, useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { GrMenu} from 'react-icons/gr';

import "primereact/resources/primereact.min.css";                                       
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useBookings from '../hooks/useBookings';
import useHouseOwner from '../hooks/useHouseOwner';
         
export default function Header() {
  const[refetch,housebookings]=useBookings()
    const [visible, setVisible] = useState(false);
    const { currentUser,logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const [allusers]=useHouseOwner()

    const handleLogout = () => {
      
        logout();
        navigate('/login')
      };
    

  return (
    <div className=" navbar bg-white shadow-md sticky top-0 z-50 text-primary-content gap-3 lg:gap-8 flex lg:flex-row flex-col justify-between items-center lg:py-7">
    <a className="btn btn-ghost normal-case text-xl text-black">House<b className='text-red-500'>Hunting</b></a>



    {allusers.find((x)=>x?.email===currentUser?.email)?.role==="house renter"&& 
    <button className="btn md:hidden block">
  My Bookings
  <div className="badge bg-red-500 text-white">{housebookings.length}</div>
</button>
    }










    <div className="card  flex md:hidden justify-content-center">
    <Sidebar style={{width:"80%"}} visible={visible} onHide={() => setVisible(false)}>
     <ul className=' flex flex-col justify-center items-center gap-5'>
<Link to="/"><li className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Home+</li></Link>
  
       
        {currentUser&&<Link to='/dashboard'><li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li></Link>}
      {currentUser?<li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500' onClick={handleLogout}>LogOut</li>:    <Link to='/login'> <li  className='btn bg-red-500 text-white btn-ghost normal-case text-xl  hover:text-red-500'>Login</li></Link>}
        
{!currentUser&&   
  <Link to='/signup'>      <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Signup</li></Link>}
    </ul>

    </Sidebar>
    <Button  style={{
              border:"none",
    backgroundColor: '#efefef', 
    color: 'white', 
  }} icon={<GrMenu/>} onClick={() => setVisible(true)} />
</div>
         






    <ul className=' hidden md:flex justify-center items-center gap-5'>
<Link to="/"><li className='btn btn-ghost normal-case text-xl text-black hover:text-red-500 '>Home+</li></Link>
   {allusers.find((x)=>x?.email===currentUser?.email)?.role==="house renter"&& <li>
    <button className="btn">
  My Bookings
  <div className="badge bg-red-500 text-white">{housebookings.length}</div>
</button>
    </li>}
    
        {currentUser&&<Link to='/dashboard'><li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li></Link>}
      {currentUser?<li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500' onClick={handleLogout}>LogOut</li>:    <Link to='/login'> <li  className='btn bg-red-500 text-white btn-ghost normal-case text-xl  hover:text-red-500'>Login</li></Link>}
        
{!currentUser&&   
  <Link to='/signup'>      <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Signup</li></Link>}
    </ul>

    
  </div>
  )
}
