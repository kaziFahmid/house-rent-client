import React, { useState } from 'react';
import Banner from '../Banner/Banner';

export default function Home() {
  const [rentRange, setRentRange] = useState([0, 10000]);

  const handleRentRangeChange = (event) => {
    setRentRange([
      parseInt(event.target.value),
      parseInt(event.target.max),
    ]);
  };

  return (
    <>
      <Banner />
      <div className="bg-white   container mx-auto p-4">
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
              type="text"
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










      
    </>
  );
}
