import React, { useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
         
export default function Header() {
    const [visible, setVisible] = useState(false);
  return (
    <div className="navbar bg-white  text-primary-content gap-8 flex justify-between items-center py-7">
    <a className="btn btn-ghost normal-case text-xl text-black">House<b className='text-red-500'>Hunting</b></a>

    <div className="card flex md:hidden justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
</div>
         








    <ul className=' hidden md:flex justify-center items-center gap-5'>
        <li className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Home+</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>About</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Login</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Signup</li>
    </ul>
  </div>
  )
}
