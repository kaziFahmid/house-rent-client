import React from 'react'

export default function Header() {
  return (
    <div className="navbar bg-white  text-primary-content gap-8 flex justify-between items-center py-7">
    <a className="btn btn-ghost normal-case text-xl text-black">House<b className='text-red-500'>Hunting</b></a>
    <ul className='flex justify-center items-center gap-5'>
        <li className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Home+</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>About</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Dashboard</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Login</li>
        <li  className='btn btn-ghost normal-case text-xl text-black hover:text-red-500'>Signup</li>
    </ul>
  </div>
  )
}
