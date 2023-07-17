import React from 'react'

export default function AddNewHouse() {
  return (

    <>
      <div className=" h-96 overflow-y-auto mt-24 max-w-5xl mx-auto">
      <form >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bedrooms" className="block text-gray-700 font-bold mb-2">
            Bedrooms
          </label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bathrooms" className="block text-gray-700 font-bold mb-2">
            Bathrooms
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="roomSize" className="block text-gray-700 font-bold mb-2">
            Room Size
          </label>
          <input
            type="text"
            id="roomSize"
            name="roomSize"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="picture" className="block text-gray-700 font-bold mb-2">
            Picture
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="availabilityDate" className="block text-gray-700 font-bold mb-2">
            Availability Date
          </label>
          <input
            type="date"
            id="availabilityDate"
            name="availabilityDate"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rentPerMonth" className="block text-gray-700 font-bold mb-2">
            Rent per Month
          </label>
          <input
            type="number"
            id="rentPerMonth"
            name="rentPerMonth"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-red-500 btn text-white">
          Submit
        </button>
      </form>
    </div>
    </>

  )
}
