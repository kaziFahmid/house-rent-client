import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../AuthProvider';

export default function Signup() {
    const navigation=useNavigate()
    const { login } = useContext(AuthContext);
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
      } = useForm();
    
      const onSubmit = (data) => {
        const { email, password, username, image, role,phone } = data;
    
        axios
          .post('/register', {
            username: username,
            email: email,
            photoURL: image,
            password:password,
            role: role,
            phone:phone
          })
          .then((res) =>{
            login(res.token, {
                email: email,
                password:password,
              
              });
              navigation('/')
          })
          .catch((error) => console.error(error));
      };
    
      const password = watch('password');
      const confirmPassword = watch('confirmpassword');
      const isPasswordMatch = password === confirmPassword;

  return (
   <>
   

 <form onSubmit={handleSubmit(onSubmit)} className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
 	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
   <div
    className="absolute inset-0 bg-gradient-to-r from-indigo-300 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
  </div>
  <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    <div className="max-w-md mx-auto">
      <div>
        <h1 className="text-2xl font-semibold">Sign up to your account</h1>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          
        <div className="relative">
            <input  id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username"
            
            
            {...register('username', { required: 'Username is required' })}
                        aria-invalid={errors.username ? 'true' : 'false'}
          






            
           />
             {errors.username && (
              <p role="alert" className="text-red-500">
                {errors.username.message}
              </p>
            )}
           <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
           </div>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
           <div className="relative">
            <input  id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address"
            
            
         {...register('email', { required: 'Email is required' })}
                        aria-invalid={errors.email ? 'true' : 'false'}
          
            
            />
             {errors.email && (
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
         </div>
         <div className="relative">
           <input  id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" 
            
            
            {...register('password', { required: 'Password is required' })}
                        aria-invalid={errors.password ? 'true' : 'false'}                         
            />
              {errors.password && (
              <p role="alert" className="text-red-500">
                {errors.password.message}
              </p>
            )}
            <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
          </div>




         <div className="relative">
            <input  id="confirmpassword" name="confirmpassword" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="confirmpassword" 
            
            
            {...register('confirmpassword', {
              required: 'Confirm Password is required',
              validate: (value) =>
                value === password || 'Passwords do not match',
            })}
            aria-invalid={errors.confirmpassword ? 'true' : 'false'}
          
            
            />
              {errors.confirmpassword && (
        <p role="alert" className="text-red-500">
          {errors.confirmpassword.message}
        </p>
      )}
      {!errors.confirmpassword && !isPasswordMatch && (
        <p role="alert" className="text-red-500">
          Passwords do not match
        </p>
      )}


            <label htmlFor="confirmpassword" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
          </div>



   








           <div className="relative">
            <input  id="image" name="image" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="image" 
            
            {...register('image', { required: 'Image is required' })}
            aria-invalid={errors.image ? 'true' : 'false'}
          
            
            />
            
            {errors.image && (
        <p role="alert" className="text-red-500">
          {errors.image.message}
        </p>
      )}

             <label htmlFor="image" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Image</label>
           </div>










           <div className="relative">
             <input  id="phone" name="phone" type="number" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="phone" 
            
           {...register('phone', { required: 'Phone is required' })}
            aria-invalid={errors.phone ? 'true' : 'false'}
          
            
            />
            {errors.phone && (
        <p role="alert" className="text-red-500">
          {errors.phone.message}
        </p>
      )}
         

            <label htmlFor=" phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone</label>
           </div>






          <div className="relative">
          <select
        id="role"
        name="role"
        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
         {...register('role', { required: 'Role is required' })}
         aria-invalid={errors.role ? 'true' : 'false'}
       >
         <option value="">Select Role</option>
         <option value="house owner">House Owner</option>
         <option value="house renter">House Renter</option>
       </select>    
       {errors.role && (
         <p role="alert" className="text-red-500">
           {errors.role.message}
         </p>
       )}
            <label htmlFor="role" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Role</label>
           </div>



   





             <p className='mt-4'>
       have an account? <Link to='/login'>Login</Link>
        </p>
          <div className="relative">
            <button className="bg-indigo-500 text-white rounded-md px-16 py-1">Submit</button>
          </div>
        </div>
       </div>
     </div>
   </div>
 </div>
 </form>
   
   </>
  );
}
