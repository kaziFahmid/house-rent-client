import React from 'react'

export default function Footer() {
  return (
    <footer className="footer  p-10 bg-white text-neutral-content mt-36">
    <div>
      <span className=" text-indigo-400">Services</span> 
      <a className="link link-hover text-black">Branding</a>
      <a className="link link-hover text-black">Design</a>
      <a className="link link-hover text-black">Marketing</a>
      <a className="link link-hover text-black">Advertisement</a>
    </div> 
    <div>
      <span className=" text-indigo-400">Company</span> 
      <a className="link link-hover text-black">About us</a>
      <a className="link link-hover text-black">Contact</a>
      <a className="link link-hover text-black">Jobs</a>
      <a className="link link-hover text-black">Press kit</a>
    </div> 
    <div>
      <span className=" text-indigo-400">Legal</span> 
      <a className="link link-hover text-black">Terms of use</a>
      <a className="link link-hover text-black">Privacy policy</a>
      <a className="link link-hover text-black">Cookie policy</a>
    </div>
  </footer>
  )
}
