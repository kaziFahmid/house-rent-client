import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsFillHouseAddFill } from 'react-icons/bs';
import { BsHousesFill } from 'react-icons/bs';
import useHouseOwner from '../hooks/useHouseOwner';
import { AuthContext } from '../AuthProvider';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";  
export default function Dashboard() {
    const { currentUser } = useContext(AuthContext);
const[allusers]=useHouseOwner()
const [visible, setVisible] = useState(false);


  


  return (
    <>
      <div className='grid lg:grid-cols-12 grid-cols-1'>
<div className='lg:col-span-2'>
    <div className='h-screen bg-slate-700 text-white lg:flex justify-center hidden   flex-col items-center    '>

{allusers.find((x)=>x?.email===currentUser?.email)?.role==='house owner'?   <ul  >
            <li className='text-center text-2xl  '>House Owner</li>
           <Link to="/dashboard/houseowner/add-new-house" > <li className='flex place-items-center gap-3 mt-9 cursor-pointer hover:text-red-500 duration-300 '> <BsFillHouseAddFill/>Add New House</li></Link>
           <Link to="/dashboard/houseowner/owned-houses"> <li className='flex place-items-center gap-3 mt-5 cursor-pointer hover:text-red-500 duration-300  '> <BsHousesFill/>Owned Houses</li></Link>
        
        </ul>: <ul  >
            <li className='text-center text-2xl  '>House Renter</li>
           <Link to="/dashboard/houserenter/manage-bookings"> <li className='flex place-items-center gap-3 mt-9 cursor-pointer hover:text-red-500 duration-300 '> <BsFillHouseAddFill/>Manage Bookings</li></Link>
   
        
        </ul>}
     
       
    </div>
</div>
<div  className='md:col-span-10'>
<div >
<div className="navbar flex justify-between items-center bg-white shadow-sm text-primary-content">

  <a className="btn btn-ghost normal-case  text-black text-2xl font-bold">Dashboard</a>
<div className='lg:hidden flex'>
<div className="card flex justify-content-center">
            <Sidebar style={{width:"70%"}} visible={visible} onHide={() => setVisible(false)}>
            {allusers.find((x)=>x?.email===currentUser?.email)?.role==='house owner'?   <ul  >
            <li className='text-center text-2xl  '>House Owner</li>
           <Link to="/dashboard/houseowner/add-new-house" > <li className='flex place-items-center gap-3 mt-9 cursor-pointer hover:text-red-500 duration-300 '> <BsFillHouseAddFill/>Add New House</li></Link>
           <Link to="/dashboard/houseowner/owned-houses"> <li className='flex place-items-center gap-3 mt-5 cursor-pointer hover:text-red-500 duration-300  '> <BsHousesFill/>Owned Houses</li></Link>
        
        </ul>: <ul  >
            <li className='text-center text-2xl  '>House Renter</li>
           <Link to="/dashboard/houserenter/manage-bookings"> <li className='flex place-items-center gap-3 mt-9 cursor-pointer hover:text-red-500 duration-300 '> <BsFillHouseAddFill/>Manage Bookings</li></Link>
   
        
        </ul>}
            </Sidebar>
            <Button  style={{
              border:"none",
    backgroundColor: '#efefef', 
    color: 'black', 
  }} icon={<AiOutlineMenu/>} onClick={() => setVisible(true)} />
        </div>
</div>
</div>
<Outlet/>
</div>
</div>
      </div>
    </>
  )
}
