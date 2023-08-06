import React from 'react';
import { BiSolidBed } from 'react-icons/bi';
import { BiSolidBath } from 'react-icons/bi';
import { BsFillBuildingFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Banner() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
   <>
 <section className='min-h-screen bg-[url(https://i.ibb.co/rF6NC72/26f884b20bbf7784b9a209048e15178c-1.png)]  bg-right bg-contain '>

<div className='flex  lg:gap-10 justify-between max-w-5xl mx-auto pt-9 lg:flex-row flex-col'>
  
<div data-aos="fade-right" className='mt-12'>
  <h1 className='lg:text-6xl text-3xl md:text-5xl font-semibold'>Rent Or Sell<br className='lg:block hidden'></br> your property easily</h1>
  <p className='mt-7 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit voluptatem, excepturi labore, atque minima amet commodi odit cupiditate, ea dignissimos. Saepe eaque possimus cumque dolores eum, eligendi id obcaecati.</p>
  <div className='flex gap-7 md:flex-row flex-col justify-start items-center mt-9'>
<div className='border-l-4 border-indigo-500 ps-4 '>
  <h3  className='text-4xl font-semibold text-indigo-400'>500K+</h3>
</div>
<div className='border-l-4 border-indigo-500  ps-4'>
  <h3 className='text-4xl font-semibold text-indigo-400'>100K+</h3></div>

  </div>
</div>

<div data-aos="fade-left" >
  

<div  className="  w-72 mx-auto lg:mx-0 bg-base-100 shadow-xl lg:mt-0 mt-9">
  <figure><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className='img-fluid rounded-lg' alt="Shoes" /></figure>
  <div className="px-4 mt-5">
  <div className='flex items-center  justify-start'>
  <h2 className="card-title text-indigo-400 font-bold text-2xl">$2,700/ </h2>
  <small className='font-semibold text-gray-400'>month</small>
  </div>
 <h2 className='text-black font-bold text-xl mt-2'>Baverly Springfield</h2>
 <p className='text-gray-400 font-semibold mt-2'>282Lake Sevilla,Uttara</p>
   <ul className='flex justify-around items-center py-3 gap-7 border-t border-slate-200 mt-6 '>
<li className='flex justify-center items-center gap-2'><BiSolidBed  className='text-indigo-400 '/><span className='text-gray-400  font-semibold'>2</span></li>
<li className='flex justify-center items-center  gap-2 '><BiSolidBath className='text-indigo-400 '/><span className='text-gray-400 font-semibold'>2</span></li>
<li className='flex justify-center items-center  gap-2 '><BsFillBuildingFill className='text-indigo-400 '/><span className='text-gray-400 font-semibold'>2</span></li>
   </ul>
  </div>
</div>



</div>

</div>
<div className='flex lg:flex-row flex-col-reverse justify-between items-center lg:max-w-5xl mx-auto mt-9'>

<div data-aos="fade-right" className="  md:stats w-full lg:w-fit shadow bg-white lg:mt-0 mt-5 flex flex-col lg:flex-row">
  
  <div className="stat lg:place-items-start place-items-center ">
    <h3 className="stat-title">Location</h3>
    <div className='font-extrabold' >Barcelona Spain</div>

  </div>
  
  <div className="stat lg:place-items-start place-items-center ">
    <h3 className="stat-title">Availibility</h3>
    <div className='font-extrabold' ><input type='date'/></div>

  </div>
  <div className="stat lg:place-items-start place-items-center  ">
 <button className='btn bg-indigo-400 text-white px-24'>Search</button>

  </div>
  
   
  
</div>


<div  data-aos="fade-left" className=" w-44 border-2 border-indigo-600 bg-base-100 rounded-lg shadow-xl lg:mt-0 mt-9">
  <figure><img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" className='img-fluid rounded-lg' alt="Shoes" /></figure>
  <div className="px-4 mt-5">
  <div className='flex items-center  justify-start'>
  <h2 className="card-title text-indigo-400 font-bold ">$2,700/ </h2>
  <small className='font-semibold text-gray-400'>month</small>
  </div>
 <h2 className='text-black font-bold  mt-2'>Baverly Springfield</h2>
 <p className='text-gray-400 font-semibold mt-2'>282Lake Sevilla,Uttara</p>
   <ul className='flex justify-around items-center py-3 gap-7 border-t border-slate-200 mt-6 '>
<li className='flex justify-center items-center gap-2'><BiSolidBed  className='text-indigo-400 '/><span className='text-gray-400  font-semibold'>2</span></li>
<li className='flex justify-center items-center  gap-2 '><BiSolidBath className='text-indigo-400 '/><span className='text-gray-400 font-semibold'>2</span></li>
<li className='flex justify-center items-center  gap-2 '><BsFillBuildingFill className='text-indigo-400 '/><span className='text-gray-400 font-semibold'>2</span></li>
   </ul>
  </div>
</div>

</div>

 </section>
   </>
  )
}





