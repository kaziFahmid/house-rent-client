import React, { useContext, useState } from 'react';
import Banner from '../Banner/Banner';
import { useQuery } from '@tanstack/react-query';
import useHousesCount from '../hooks/useHousesCount';
import axios from 'axios';
import useHouseOwner from '../hooks/useHouseOwner';
import { AuthContext } from '../AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useBookings from '../hooks/useBookings';
import BestHouse from './BestHouse/BestHouse';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  
  const[refetch,housebookings]=useBookings()
  const [rentRange, setRentRange] = useState([0, 10000]);
const[currentPage,setCurrentPage]=useState(0)
const[allusers]=useHouseOwner()
const{currentUser}=useContext(AuthContext)
  const[city,setCity]=useState('')
const[bedrooms,setBedrooms]=useState('')
const[bathrooms,setBathrooms]=useState('')
const[roomsize,setRoomsize]=useState('')
const[availability,setAvailability]=useState('')
const [housescount]=useHousesCount()
const navigate=useNavigate()
let itemsPerPage = 10;
let pageNumbers = Math.ceil(housescount.result / itemsPerPage);
let pagination = [];

for (let i = 0; i <= pageNumbers; i++) {
  pagination.push(i);
}
  const handleRentRangeChange = (event) => {
    setRentRange([
      parseInt(event.target.value),
      parseInt(event.target.max),
    ]);
  };

  const { data: houses = [] } = useQuery({
    queryKey: [
      'houses',
      city,
      bedrooms,
      bathrooms,
      currentPage,
      roomsize,
      availability,
      rentRange[0], // Minimum rent
      rentRange[1], // Maximum rent
    ],
    queryFn: async () => {
      const res = await fetch(`https://house-rent-server-two.vercel.app/houses?city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&roomsize=${roomsize}&availabilityDate=${availability}&minRent=${rentRange[0]}&maxRent=${rentRange[1]}&page=${currentPage}&limit=${itemsPerPage}`);
      return res.json();
    },






  });

  let handleBookings=(houses)=>{
    if(!currentUser){
      navigate('/login')

    }
   if(housebookings.length===2){
return toast.error('You cannot add more than 2 bookings')
   }
    axios.post('/housebookings',houses)
    .then(res=>{
     if(res.insertedId){
      refetch()
      toast.success('Booking added')
     }
    
    })
  
  }
  

  return (
    <>
      <Banner />
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="bg-white border-t-4 mt-16 rounded-md border-red-500    shadow-xl container mx-auto p-6">
        <div className="flex flex-wrap items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              onChange={(e)=>{setCity(e.target.value)}}
              placeholder="Search by city"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="number"
              placeholder="Bedrooms"
              onChange={(e)=>setBedrooms(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="number"
              placeholder="Bathrooms"
              onChange={(e)=>setBathrooms(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="text"
              onChange={(e)=>setRoomsize(e.target.value)}
              placeholder="Room Size"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="date"
              onChange={(e)=>setAvailability(e.target.value)}
              placeholder="Availability"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex items-center space-x-2">
              <label htmlFor="rentRange" className="text-black">
                Rent Range
              </label>
              <input
                id="rentRange"
                type="range"
                min="0"
                max="10000"
                step="100"
                value={rentRange[0]}
                onChange={handleRentRangeChange}
                className="w-64 mt-5"
              />
              <span className="text-black">{rentRange[0]}</span>
            </div>
          </div>
        </div>
      </div>



<div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 container mx-auto gap-8 mt-16'>
{houses.map((house)=>{return <div key={house._id} className="card  bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={house.picture} alt="Shoes" className="rounded-xl img-fluid" />
  </figure>
  <div className="card-body ">
 
    <div className='flex justify-between items-center'>   <h2 className="card-title text-2xl">{house.name}</h2> <h3 className='text-xl'>${house.rentPerMonth
}</h3></div>
<div className='flex justify-between items-center'><h4 className='font-bold'>Bathrooms
</h4> <h4>{house.bathrooms
}</h4></div>
<div className='flex justify-between items-center'><h4 className='font-bold'>Bedrooms</h4> <h4>{house.bedrooms}</h4></div>
<div className='flex justify-between items-center'><h4 className='font-bold'>Address
</h4> <h4>{house.address
}</h4></div>
<div className='flex justify-between items-center'><h4 className='font-bold'>City
</h4> <h4>{house.city
}</h4></div>

<div className='flex justify-between items-center'><h4 className='font-bold'>Room Size
</h4> <h4>{house.roomSize

}</h4></div>
<div className='flex justify-between items-center'><h4 className='font-bold'>Phone Number
</h4> <h4>{house.phoneNumber

}</h4></div>


<div className='flex justify-between items-center'><h4 className='font-bold'>Availability Date
</h4> <h4>{house.availabilityDate

}</h4></div>

<p>{house.description


}</p>


    <div className="card-actions">
      <button className="btn bg-red-500 text-white" onClick={()=>handleBookings({picture:house.picture,
      username:allusers.find((x)=>x?.email===currentUser?.email)?.username,
      email:allusers.find((x)=>x?.email===currentUser?.email)?.email,
      phone:allusers.find((x)=>x?.email===currentUser?.email)?.phone,
name:house.name,
rentPerMonth:house.rentPerMonth,
bathrooms:house.bathrooms,
bedrooms:house.bedrooms,
address:house.address,
city:house.city,
roomSize:house.roomSize,
phoneNumber:house.phoneNumber,
availabilityDate:house.availabilityDate,
description:house.description})} disabled={allusers.find((x)=>x?.email===currentUser?.email)?.role==='house owner'&&true}>Book Now</button>
    </div>
  </div>
</div>})}

</div>


<div className='text-center mt-32'>
{pagination.map((numbers,index)=>{return <button onClick={()=>{setCurrentPage(numbers)}} className={currentPage===numbers ? "bg-red-500  ms-4 text-white btn":"bg-slate-100 text-black btn ms-4"} key={index} >{numbers}</button>})}
</div>

<BestHouse/>




    </>
  );
}
