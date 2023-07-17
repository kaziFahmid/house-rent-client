import React, { useContext, useEffect, useState } from 'react'
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import { GrMenu} from 'react-icons/gr';
//core
import "primereact/resources/primereact.min.css";                                       
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
         
export default function Header() {
    const [visible, setVisible] = useState(false);
    const { currentUser,logout} = useContext(AuthContext);
    const navigate = useNavigate();

    
    const handleLogout = () => {
      
        logout();
        navigate('/login')
      };
     

  return (
    <div className="navbar bg-white shadow-md  text-primary-content gap-8 flex justify-between items-center py-7">
    <a className="btn btn-ghost normal-case text-xl text-black">House<b className='text-red-500'>Hunting</b></a>

    <div className="card  flex md:hidden justify-content-center">
    <Sidebar  visible={visible} onHide={() => setVisible(false)}>
   
    <ul className='flex flex-col mt-20' >
    <Link to='/'> <li className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Home+</li></Link>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>About</li>
        {currentUser&&<Link to='/dashboard'><li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li></Link>}

        {currentUser?<li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500' onClick={handleLogout}>LogOut</li>:    <Link to='/login'> <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Login</li></Link>}

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
<Link to="/"><li className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Home+</li></Link>
      
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>About</li>
        {currentUser&&<Link to='/dashboard'><li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li></Link>}
      {currentUser?<li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500' onClick={handleLogout}>LogOut</li>:    <Link to='/login'> <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Login</li></Link>}
        
{!currentUser&&   
  <Link to='/signup'>      <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Signup</li></Link>}
    </ul>
  </div>
  )
}
