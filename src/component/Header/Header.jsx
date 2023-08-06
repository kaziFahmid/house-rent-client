import React, { useContext, useEffect, useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { GrMenu} from 'react-icons/gr';
import { FaHome} from 'react-icons/fa';
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
    <>

<div className="navbar bg-base-100  flex justify-between items-center border-b border-gray-300 py-3  ">
  <a className="btn btn-ghost normal-case "><FaHome className=' text-xl md:text-4xl text-indigo-400'/> House Hunting</a>
  
    {allusers.find((x)=>x?.email===currentUser?.email)?.role==="house renter"&& 
    <button className="btn md:hidden block">
  My Bookings
  <div className="badge bg-red-500 text-white">{housebookings.length}</div>
</button>
    }



    <div className="card  flex md:hidden justify-content-center">
    <Sidebar style={{width:"80%"}} visible={visible} onHide={() => setVisible(false)}>
     <ul className='font-semibold flex flex-col justify-center items-center gap-5'>
<Link to="/"><li >Home</li></Link>
  
       
        {currentUser&&<Link to='/dashboard'><li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li></Link>}
      {currentUser?<li   onClick={handleLogout}>LogOut</li>:    <Link to='/login'> <li  >Login</li></Link>}
        
{!currentUser&&   
  <Link to='/signup'>      <li  >Signup</li></Link>}
    </ul>

    </Sidebar>
    <Button  style={{
              border:"none",
    backgroundColor: '#efefef', 
    color: 'white', 
  }} icon={<GrMenu/>} onClick={() => setVisible(true)} />
</div>
         

    <ul className=' font-bold hidden md:flex justify-center items-center gap-5'>
<Link to="/"><li >Home</li></Link>
   {allusers.find((x)=>x?.email===currentUser?.email)?.role==="house renter"&& <li>
    <button className="btn">
  My Bookings
  <div className="badge bg-red-500 text-white">{housebookings.length}</div>
</button>
    </li>}
    
        {currentUser&&<Link to='/dashboard'><li >Dashboard</li></Link>}
      {currentUser?<li   onClick={handleLogout}>LogOut</li>:    <Link to='/login'> <li  ><button className='btn border bg-slate-100 px-7 border-slate-400' >Login</button></li></Link>}
        
{!currentUser&&   
  <Link to='/signup'>  <li  ><button className='btn bg-indigo-400 text-white px-7'>Signup</button></li></Link>}
    </ul>

</div>

    </>

  )
}









 