import React from 'react'

export default function OwnedHouses() {
  return (
   <>
   
   
   <h1 className='text-4xl text-center font-bold mt-7'>Owned <b className='text-red-500'>Houses</b></h1>
   
   
   <div className='mt-6 container mx-auto'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
 <th>SL</th>
        <th>Picture</th>
        <th>Name</th>
        <th>Address</th>
        <th>City</th>
        <th>Bedrooms</th>
        <th>Bathrooms</th>
        <th>Room size</th>
        <th>Availability Date</th>
        <th>Rent per month</th>
        <th>Phone number</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    <tr>
 <td>SL</td>
        <td>Picture</td>
        <td>Name</td>
        <td>Address</td>
        <td>City</td>
        <td>Bedrooms</td>
        <td>Bathrooms</td>
        <td>Room size</td>
        <td>Availability Date</td>
        <td>Rent per month</td>
        <td>Phone number</td>
        <td>Description</td>
        <td>
        <button className='btn bg-yellow-500 text-white'>Edit</button>
            <button className='btn bg-red-500 text-white'>Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
   
   
   
   </>
  )
}
