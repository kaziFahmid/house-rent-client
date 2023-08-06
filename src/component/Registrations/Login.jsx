import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../AuthProvider';


export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login,currentUser } = useContext(AuthContext);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post('/login',{
  
        email: email,
        password: password,

      });
      const { token } = response;
      login(token,{
  
        email: email,
        password: password,

      });
      navigate('/');
      
    } catch (error) {
      console.error(error);
      // Handle login error or display error messages to the user
    }

  };

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
					<h1 className="text-2xl font-semibold">Login Form with Floating Labels</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input  id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address"
              
              
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
              <p className='mt-4'>
          Don't have an account? <Link to='/signup'>Register</Link>
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
