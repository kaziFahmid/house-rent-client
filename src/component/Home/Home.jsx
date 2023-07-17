import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const [rentRange, setRentRange] = useState([0, 10000]);
const[city,setCity]=useState()
  const handleRentRangeChange = (event) => {
    setRentRange([
      parseInt(event.target.value),
      parseInt(event.target.max),
    ]);
  };
  const { data: houses = [] } = useQuery({
    queryKey: ['houses',city],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/houses?city=${city}`)
      return res.json()
    },
  })
console.log(houses)
  return (
    <>
      <Banner />
      <div className="bg-slate-100   container mx-auto p-4">
        <div className="flex flex-wrap items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search by city"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="number"
              placeholder="Bedrooms"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="number"
              placeholder="Bathrooms"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="text"
              placeholder="Room Size"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="date"
              placeholder="Availability"
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
          </div>
          <div className="w-full sm:w-auto">
            <div className="flex items-center space-x-2">
              <label htmlFor="rentRange" className="text-white">
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
                className="w-64"
              />
              <span className="text-white">{rentRange[0]}</span>
            </div>
          </div>
        </div>
      </div>



<div className='grid md:grid-cols-3 grid-cols-1 container mx-auto gap-8 mt-16'>
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>})}

</div>







    </>
  );
}
