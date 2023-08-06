import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default function OwnedHouses() {
    const{currentUser}=useContext(AuthContext)
    const { refetch, data: houses = [] } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
          const res = await fetch(`https://house-rent-server-two.vercel.app/houses?email=${currentUser.email}`)
          return res.json()
        },
      })

      let handleDelete=(_id)=>{
        axios.delete(`/houses/${_id}`)
        .then((res)=>{
            console.log(res)
            if(res.deletedCount>0){
                refetch()
                toast("Deleted House")
            }
        })
      }
  return (
   <>
   
   <ToastContainer />
   <h1 className='text-4xl text-center font-bold mt-7'>Owned <b className='text-indigo-500'>Houses</b></h1>
   
   
   <div className='mt-6 container mx-auto'>
      <div className="overflow-x-auto h-96">
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
              <Link to={`/dashboard/houseowner/edit-house/${house?._id}`}> <button className='btn bg-indigo-500 text-white'>Edit</button></Link>
                   <button className='btn bg-red-500 text-white' onClick={()=>{handleDelete(house?._id)}}>Delete</button>
               </td>
             </tr> })}  
    </tbody>
  </table>
</div>
    </div>
   
   
   
   </>
  )
}
