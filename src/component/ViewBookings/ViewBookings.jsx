import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function ViewBookings() {
    const data=useLoaderData()
    console.log(data)
  return (
    <>

    <div className='grid md:grid-cols-2 grid-cols-1 gap- md:max-w-5xl mx-auto'>
        <div>
            <div>
                <img src={data.picture} className='img-fluid'/>
            </div>
        </div>
        <div>
            <div className='bg-white shadow-xl pt-8 my-6 text-black p-8 rounded-md'>
            <h1 className='md:text-5xl text-2xl '>{data.name}</h1>
            <p className='mt-5'>{data.description}</p>
            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold' >Rent Per Month</h2>
                <h2 className="text-2xl">${data.rentPerMonth}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Bathrooms</h2>
                <h2>{data.bathrooms}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Bedrooms</h2>
                <h2>{data.bedrooms}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Address</h2>
                <h2>{data.address}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>City</h2>
                <h2>{data.City}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Room Size</h2>
                <h2>{data.roomSize}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Room Size</h2>
                <h2>{data.roomSize}</h2>
            </div>
          
            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Owner Phone Number</h2>
                <h2>{data.phoneNumber}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Availability Date</h2>
                <h2>{data.availabilityDate}</h2>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center mt-3'>
                <h2 className='font-bold'>Availability Date</h2>
                <h2>{data.availabilityDate}</h2>
            </div>




            </div>
        </div>

    </div>
      
    </>
  )
}
