import React from 'react'
import useBookings from '../../hooks/useBookings'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


export default function ManageBookings() {
    const[refetch,housebookings]=useBookings()
    let handleRemove=(_id)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/housebookings/${_id}`)
          .then((res)=>{
            if(res.deletedCount>0){
              refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
        
        }
      })
     
    }
  return (
    <>
    <h1 className='text-center text-4xl mt-6 font-bold'> My<span className='text-red-500'> Bookings</span></h1>
    
    <div className="overflow-x-auto h-96 mt-12">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Sl</th>
          <th>Name</th>
          <th>Picture</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {housebookings.map((housebooking,index)=>{
            return <tr key={housebooking._id}>
            <td>{index+1}</td>
              <td>{housebooking.name}</td>
              <td>
              <div className="avatar">
  <div className="w-16 rounded-full">
    <img src={housebooking.picture} />
  </div>
</div>
              </td>
              <td>{housebooking.username}</td>
              <td>{housebooking.email}</td>
              <td>{housebooking.phone}</td>
              <td>
           <Link to={`/dashboard/houserenter/view-bookings/${housebooking._id}`}>   <button className='text-white bg-green-500 btn'>View booking</button></Link>
                <button className='text-white bg-red-500 btn' onClick={()=>{handleRemove(housebooking._id)}}>Remove</button>
              </td>
            </tr>
        })}
      
      </tbody>
    </table>
  </div>
    
    
    
    
    
    
    
    </>
  )
}
