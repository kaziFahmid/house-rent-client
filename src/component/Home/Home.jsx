import React, { useContext, useState } from 'react';
import Banner from '../Banner/Banner';
import { useQuery } from '@tanstack/react-query';
import useHousesCount from '../hooks/useHousesCount';
import axios from 'axios';
import useHouseOwner from '../hooks/useHouseOwner';
import { AuthContext } from '../AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useBookings from '../hooks/useBookings';

import { useNavigate } from 'react-router-dom';
import { BiSolidBed } from 'react-icons/bi';
import { BiSolidBath } from 'react-icons/bi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import WhoweAre from '../WhoweAre/WhoweAre';
import FeedBacks from './FeedBacks/FeedBacks';
import NewsLetter from '../NewsLetter/NewsLetter';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
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



<div className=" stats flex justify-center lg:flex-row flex-col mt-12 items-center shadow mx-auto lg:max-w-6xl">
  
  <div className="stat text-start lg:place-items-start place-items-center">
    <div className="stat-title font-bold">City</div>
    <div  >
    <input
              type="text"
              onChange={(e)=>{setCity(e.target.value)}}
              placeholder="Search by city"
              className="  rounded-lg  py-2 w-full lg:mt-0 mt-3"
            />
    </div>

  </div>
  
  <div className="stat lg:place-items-start place-items-center">
  <div className="stat-title font-bold">Bedrooms</div>
    <div  >
    <input
              type="number"
              placeholder="Bedrooms"
              onChange={(e)=>setBedrooms(e.target.value)}
              className="  rounded-lg  py-2 w-full lg:mt-0 mt-3"
            />
    </div>
  </div>
  
  <div className="stat lg:place-items-start place-items-center">
  <div className="stat-title font-bold">Bathrooms</div>
    <div  >
    <input
              type="number"
              placeholder="Bathrooms"
              onChange={(e)=>setBathrooms(e.target.value)}
              className="  rounded-lg  py-2 w-full lg:mt-0 mt-3"
            />
    </div>
  </div>


  <div className="stat lg:place-items-start place-items-center">
  <div className="stat-title font-bold">Room size</div>
    <div  >
    <input
              type="text"
              onChange={(e)=>setRoomsize(e.target.value)}
              placeholder="Room Size"
              className="  rounded-lg  py-2 w-full lg:mt-0 mt-3"
            />
    </div>
  </div>


  <div className="stat lg:place-items-start place-items-center">
  <div className="stat-title font-bold">Availability</div>
    <div  >
    <input
              type="date"
              onChange={(e)=>setAvailability(e.target.value)}
              placeholder="Availability"
              className="  rounded-lg  py-2 w-full lg:mt-0 mt-3"
            />
    </div>
  </div>


  <div className="stat lg:place-items-start place-items-center">
  <div className="stat-title font-bold">Price Range({rentRange[0]})</div>
    <div  >
    <input
                id="rentRange"
                type="range"
                min="0"
                max="10000"
                step="100"
                value={rentRange[0]}
                onChange={handleRentRangeChange}
                className=" mt-5"
              />
    </div>
  </div>




  
</div>









<div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:max-w-6xl mx-auto gap-8 mt-16 '>
{houses.map((house)=>{return <div data-aos="fade-right" key={house._id} className="   bg-base-100 shadow-xl lg:mt-0 mt-9 relative">
<div className=" bg-indigo-400 px-4 py-2 text-white absolute top-0">Popular</div>
  <figure><img src= {house.picture} className='img-fluid rounded-t-lg  ' alt="Shoes" /></figure>
  <div className="px-4 mt-5">
  <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
  <div className='flex items-center  justify-start'>
  <h2 className="card-title text-indigo-400 font-bold text-2xl">${house.rentPerMonth
}/ </h2>
  <small className='font-semibold text-gray-400'>month</small>
  </div>
 <h2 className='text-black font-bold text-2xl mt-2'>{house.name}</h2>
 <p className='text-gray-400 font-semibold mt-2'>{house.address
}</p>
<p className='text-gray-400 font-semibold mt-2'>{house.city
}</p>
<p className='text-gray-400 font-semibold mt-2 flex justify-start items-center gap-2'><BsFillCalendarDateFill className='text-gray-400 text-lg'/><span>{house.availabilityDate
}</span></p>

<div className="card-actions mt-2">
    <button className="btn bg-indigo-400 px-7 text-white ms-auto" onClick={()=>handleBookings({picture:house.picture,
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

   <ul className='flex justify-around items-center py-3 gap-7 border-t border-slate-200 mt-6 '>
<li className='flex justify-center items-center gap-2'><BiSolidBed  className='text-indigo-400 text-xl '/><span className='text-gray-400  font-semibold'>{house.bedrooms

}</span></li>
<li className='flex justify-center items-center  gap-2 '><BiSolidBath className='text-indigo-400  text-xl'/><span className='text-gray-400 font-semibold'>{house.bathrooms
}</span></li>
<li className='flex justify-center items-center  gap-2 '><BsFillBuildingFill className='text-indigo-400 text-lg '/><span className='text-gray-400 font-semibold'>{house.roomSize

}</span></li>
   </ul>
  </div>
  
</div>})}

</div>


<div className='text-center mt-32'>
{pagination.map((numbers,index)=>{return <button onClick={()=>{setCurrentPage(numbers)}} className={currentPage===numbers ? "bg-indigo-500  ms-4 text-white btn":"bg-slate-100 text-black btn ms-4"} key={index} >{numbers}</button>})}
</div>

<WhoweAre/>
<FeedBacks/>
<NewsLetter/>

    </>
  );
}



