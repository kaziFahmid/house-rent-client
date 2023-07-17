import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'

export default function OwnedHouses() {
    const{currentUser}=useContext(AuthContext)
    const { refetch, data: houses = [] } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/houses?email=${currentUser?.email}`)
          return res.json()
        },
      })
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
    {houses.map((house,index)=>{return  <tr key={house?._id}>
  
   
        <td>{index+1}</td>
               <td>
               
               <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={house?.picture} />
  </div>
</div>
           
               </td>
               <td>{house?.name}</td>
               <td>{house?.address}</td>
               <td>{house?.city}</td>
               <td>{house?.bedrooms}</td>
               <td>{house?.bathrooms}</td>
               <td>{house?.roomSize}</td>
               <td>{house?.availabilityDate}</td>
               <td>{house?.rentPerMonth}</td>
               <td>{house?.phoneNumber}</td>
               <td>{house?.description}</td>
               <td>
               <button className='btn bg-yellow-500 text-white'>Edit</button>
                   <button className='btn bg-red-500 text-white'>Delete</button>
               </td>
             </tr> })}  
    </tbody>
  </table>
</div>
    </div>
   
   
   
   </>
  )
}
