import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { BsFillHouseAddFill } from 'react-icons/bs';
import { BsHousesFill } from 'react-icons/bs';

export default function Dashboard() {
  return (
    <>
      <div className='grid md:grid-cols-12 grid-cols-1'>
<div className='md:col-span-2'>
    <div className='h-screen bg-slate-50 flex justify-center  flex-col items-center    '>


 
 
        <ul  >
            <li className='text-center text-2xl  '>House Owner</li>
           <Link to="/dashboard/houseowner/add-new-house" > <li className='flex place-items-center gap-3 mt-9 cursor-pointer hover:text-red-500 duration-300 '> <BsFillHouseAddFill/>Add New House</li></Link>
           <Link to="/dashboard/houseowner/owned-houses"> <li className='flex place-items-center gap-3 mt-5 cursor-pointer hover:text-red-500 duration-300  '> <BsHousesFill/>Owned Houses</li></Link>
        
        </ul>
        <ul  >
            <li className='text-center text-2xl  '>House Renter</li>
           <Link to="/dashboard/houserenter/manage-bookings"> <li className='flex place-items-center gap-3 mt-9 cursor-pointer hover:text-red-500 duration-300 '> <BsFillHouseAddFill/>Manage Bookings</li></Link>
   
        
        </ul>
    </div>
</div>
<div  className='md:col-span-10'>
<div >
<div className="navbar bg-white shadow-sm text-primary-content">
  <a className="btn btn-ghost normal-case text-xl">Dashboard</a>

</div>
<Outlet/>
</div>
</div>
      </div>
    </>
  )
}
