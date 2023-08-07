import React from 'react'

const Contactus = () => {
  return (
    <div>
<h1 className='text-center text-4xl mt-8'>Contact us</h1>
<div className="container mx-auto p-4">

      <div className="bg-gray-200 p-4 rounded">
        <form action="#" method="post">
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block font-semibold mb-1">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
          </div>
          
          <button type="submit" className="bg-indigo-400 text-white py-2 px-4 rounded hover:bg-indigo-600">Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contactus
