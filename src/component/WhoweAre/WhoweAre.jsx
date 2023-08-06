import React from 'react'

const WhoweAre = () => {

  return (
    <div className='grid  lg:grid-cols-2 grid-cols-1 gap-5 max-w-6xl mx-auto mt-40'>
      <div  className='flex justify-center items-center flex-col '>
       <div >
       <p className='text-indigo-400 mb-4'>WHO ARE WE</p>
        <h1 className='text-4xl font-semibold mb-4'>Assisting individuals in locating the appropriate real estate.</h1>
        <p>Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat.</p>
        <ul className='mt-6'>
            <li className='mt-2 bg-white shadow-lg p-7'>
            <h4 className='text-indigo-400 font-semibold'>Donec porttitor euismod</h4>
            <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>
            
            </li>
        
            <li className='mt-6 bg-white shadow-lg p-7'>
           <h4 className='text-indigo-400 font-semibold'> Donec porttitor euismod</h4>
           <p>Nullam a lacinia ipsum, nec dignissim purus. Nulla</p>

            </li>
        </ul>
       </div>
      </div>


      <div  >
        <img src='https://i.ibb.co/1Qzrtxw/Group-85.png' className='img-fluid'/>
      </div>
    </div>
  )
}

export default WhoweAre
