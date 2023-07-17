import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Banner() {
  return (
   <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>

            <div className='  mt-24  gap-5 grid md:grid-cols-2 mx-auto grid-cols-1 container'>
                <div className='flex flex-col justify-center items-center  '>
                  <div>
                  <h1 className=' text-3xl md:text-5xl font-bold text-black mb-4'>Find Your <strong className='text-red-500'>Dream House</strong></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est molestiae, minima omnis eius vel amet ex incidunt illo odio, earum perferendis, ab pariatur! Earum fuga aperiam autem explicabo ex!</p>
                    <div className='mt-4'>
                  <button className='bg-red-500 text-white btn'>Expolore</button>
                  </div>
                  </div>
                </div>

                <div>
                    <img src='https://i.ibb.co/8Pq72q7/pngwing-com-1.png' className='img-fluid'/>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
      
        <div className='  mt-24  gap-5 grid md:grid-cols-2 mx-auto grid-cols-1 container'>
                <div className='flex flex-col justify-center items-center  '>
                  <div>
                  <h1 className=' text-3xl md:text-5xl font-bold text-black mb-4'>Find Your <strong className='text-red-500'>Dream House</strong></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est molestiae, minima omnis eius vel amet ex incidunt illo odio, earum perferendis, ab pariatur! Earum fuga aperiam autem explicabo ex!</p>
                    <div className='mt-4'>
                  <button className='bg-red-500 text-white btn'>Expolore</button>
                  </div>
                  </div>
                
                </div>

                <div>
                    <img src='https://i.ibb.co/19NZKp6/pngwing-com-2.png' className='img-fluid'/>
                </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
  
        <div className='  mt-24  gap-5 grid md:grid-cols-2 mx-auto grid-cols-1 container'>
                <div className='flex flex-col justify-center items-center  '>
                  <div>
                  <h1 className=' text-3xl md:text-5xl font-bold text-black mb-4'>Find Your <strong className='text-red-500'>Dream House</strong></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est molestiae, minima omnis eius vel amet ex incidunt illo odio, earum perferendis, ab pariatur! Earum fuga aperiam autem explicabo ex!</p>
                    <div className='mt-4'>
                  <button className='bg-red-500 text-white btn'>Expolore</button>
                  </div>
                  </div>
              
                </div>

                <div>
                    <img src='https://i.ibb.co/6r90qZc/pngwing-com-3.png' className='img-fluid'/>
                </div>

            </div>
        </SwiperSlide>
    
      </Swiper>
   </>
  )
}
