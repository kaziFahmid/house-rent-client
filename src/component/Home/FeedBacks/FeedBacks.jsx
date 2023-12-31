import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const FeedBacks = () => {

  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
  <>
  
  <h1 className='text-center text-3xl mt-40 font-semibold text-indigo-400'>Feedbacks</h1>
  <div data-aos="fade-down" className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
    <div  className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
      </div>
    </div>
    
    
    
    
    
    
    
    
    <div   className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16 ">
        <img className="w-20  h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
      </div>
    </div>
    
    
    
    
    
    <div   className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16 ">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">Design Tools</h2>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">John Doe</a>
      </div>
    </div>
    </div>
  
  
  
  
  
  
  </>
  )
}

export default FeedBacks
