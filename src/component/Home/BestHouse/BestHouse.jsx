import React from 'react'

export default function BestHouse() {
  return (
 <div className='bg-slate-50 py-14 mt-32'>
       <div className='grid lg:grid-cols-2 grid-col-1 container mx-auto gap-5 '>
    <div>
  <div className='rounded-lg'>
    <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" className='img-fluid rounded-lg'/>
  </div>
    </div>
    <div className='flex justify-center items-center flex-col'>
     <div>
     <h1 className='text-6xl font-bold'>Best <b className='text-red-500'>House</b></h1>
      <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem alias eligendi, corrupti tenetur veritatis ratione repudiandae accusantium, odit, facere distinctio sequi expedita aspernatur obcaecati aliquid dolores exercitationem officia quam sit molestiae ea eos. Sequi, sapiente voluptatem reprehenderit doloremque minima consequuntur tenetur, exercitationem a numquam fugiat culpa provident ipsa iure. Nulla.</p>
      <div>
        <button className='text-white bg-red-500 btn mt-9'>Explore</button>
      </div>
     </div>
    </div>
  </div>
 </div>
  )
}
