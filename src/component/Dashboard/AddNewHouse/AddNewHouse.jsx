import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthProvider';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';
export default function AddNewHouse() {

    const { currentUser } = useContext(AuthContext);
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const { refetch, data: houses = [] } = useQuery({
        queryKey: ['houses'],
        queryFn: async () => {
          const res = await fetch(`https://house-rent-server-two.vercel.app/houses?email=${currentUser?.email}`)
          return res.json()
        },
      })
    let handleSubmit =(e)=>{
        
e.preventDefault()
let name=e.target.name.value
let address=e.target.address.value
let city=e.target.city.value
let bedrooms=e.target.bedrooms.value
let bathrooms=e.target.bathrooms.value
let roomSize=e.target.roomSize.value
let picture=e.target.picture.value
let availabilityDate=e.target.availabilityDate.value
let rentPerMonth=e.target.rentPerMonth.value
let phoneNumber=e.target.phoneNumber.value
let description=e.target.description.value
const phoneNumberPattern = /^(?:\+?88)?01[3-9]\d{8}$/; // Regex pattern for Bangladeshi phone number

if (!phoneNumberPattern.test(phoneNumber)) {
  setPhoneNumberError('Please enter a valid Bangladeshi phone number');
  return;
} else {
  setPhoneNumberError('');
  // Proceed with the signup process or other actions
}

let house={name,
    address,
    city,
    email:currentUser?.email,
    bedrooms: parseInt(bedrooms),
    bathrooms:parseInt(bathrooms),
    roomSize:parseInt(roomSize),
    picture,
    availabilityDate,
    rentPerMonth:parseInt(rentPerMonth),
    phoneNumber,
    description
    }

axios.post('/houses',house)
.then(res=>{
   if(res.insertedId){
    toast("New House has been added")
   }
})

    }
  return (

    <>
     <ToastContainer />
    <h1 className='text-center text-4xl mt-6 font-bold'>Add New <span className='text-red-500'>House</span></h1>
      <div className=" h-96 overflow-y-auto  max-w-5xl mx-auto">
      <form onSubmit={handleSubmit} >
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
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
           {phoneNumberError && (
                <p className="mt-2 text-xs text-red-500">{phoneNumberError}</p>
              )}
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
