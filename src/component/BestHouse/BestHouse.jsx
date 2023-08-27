import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const BestHouse = () => {

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});
<BestHouse/>
  return (
    <section className='grid lg:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto mt-32 bg-slate-100 p-8'>
      <div data-aos="fade-right">
        <img src='https://i.ibb.co/4sTVrk6/as.png' className='img-fluid rounded-md'/>
      </div>
      <div className='flex justify-center items-center'>
       <div data-aos="fade-down">
       <h1 className='text-3xl font-bold'>We make it easy for tenants and landlords</h1>
        <p className='mt-5 text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt, necessitatibus aut quod nesciunt labore quasi dicta eos natus molestiae? Cupiditate maxime nam dolorum accusamus voluptate corporis pariatur quos quia magni sunt rem fugiat eligendi a, vel iusto aliquid ipsam!ris pariatur quos quia magni sunt rem fugiat eligendi a, vel iusto aliquid ipsam!</p>
        <div className='mt-5'>
            <button className='btn bg-indigo-500 text-white px-8'>Explore</button>
        </div>
       </div>
      </div>
    </section>
  )
}

export default BestHouse
