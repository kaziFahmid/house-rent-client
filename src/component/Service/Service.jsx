import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Service = () => {

  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <>
    <div className='text-center mt-28'>
    <h1 className='text-3xl'>
        Our <span className='text-indigo-500'>Services</span>
    </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </div>
      <section  data-aos="fade-right" className='grid mt-24 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 '>
 
      <div className='mx-auto mt-10 lg:mt-0'>
  
  <div
    className=" mx-auto relative flex flex-col items-center justify-around p-4   h-80 rounded-2xl"
    style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '16px',  width: '20rem', height: '20rem', borderRadius: '16px', transform: 'translate(0px, 0px)', opacity: 1 }}
  >
    <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-indigo-300 rounded-xl -rotate-2" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', color: 'white', transform: 'scaleX(1.05) scaleY(0.95)', backgroundColor: '#A855F7', borderRadius: '16px', transformOrigin: 'center', rotate: '-2deg' }}></div>
    <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-indigo-400 rounded-xl rotate-2" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', color: 'white', transform: 'scaleX(1.05) scaleY(0.95)', backgroundColor: '#9333EA', borderRadius: '16px', transformOrigin: 'center', rotate: '2deg' }}></div>
    <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '16px', transform: 'scaleX(1.05) scaleY(0.95)', transformOrigin: 'center' }}></div>
    <h3 className="z-10 p-2 text-2xl font-semibold text-indigo-900" style={{ zIndex: 10, padding: '8px', fontSize: '1.5rem', fontWeight: '600', color: '#7C3AED' }}>SEO</h3>
    <div className="z-10 p-2 text-indigo-900" style={{ zIndex: 10, padding: '8px', color: '#7C3AED' }}>
<svg className="fill-current" height="96" viewBox="0 0 512 512" width="96"><path d="m123.806 105h234.55c21.146 0 38.349 17.271 38.349 38.5v102.556c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-102.556c0-29.5-23.932-53.5-53.349-53.5h-234.55c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m306.358 336.556h-141.431c-2.201 0-4.291.967-5.716 2.645l-42.497 50.021-42.496-50.022c-1.425-1.678-3.515-2.645-5.716-2.645h-15.153c-21.146 0-38.349-17.271-38.349-38.5v-154.555c0-21.229 17.203-38.5 38.349-38.5h35.679c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-35.679c-29.417 0-53.349 24-53.349 53.5v154.556c0 29.5 23.932 53.5 53.349 53.5h11.684l45.966 54.105c1.425 1.678 3.515 2.645 5.716 2.645s4.291-.967 5.716-2.645l45.966-54.105h137.961c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m221.328 447.329h-68.184c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h68.184c9.528 0 17.28 7.776 17.28 17.335s-7.752 17.336-17.28 17.336h-189.048c-9.528 0-17.28-7.777-17.28-17.336s7.752-17.335 17.28-17.335h6.635c2.406 0 4.666-1.154 6.076-3.103l13.033-18.009 13.033 18.009c1.41 1.948 3.67 3.103 6.076 3.103h41.332c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-37.502l-16.863-23.302c-1.41-1.948-3.67-3.103-6.076-3.103s-4.666 1.154-6.076 3.103l-16.863 23.302h-2.805c-17.799 0-32.28 14.506-32.28 32.335 0 17.83 14.481 32.336 32.28 32.336h189.048c17.799 0 32.28-14.506 32.28-32.336 0-17.829-14.481-32.335-32.28-32.335z"></path><path d="m290.659 64.671h28.213c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-28.213c-9.528 0-17.28-7.776-17.28-17.335s7.752-17.336 17.28-17.336h189.048c9.528 0 17.28 7.776 17.28 17.335s-7.752 17.336-17.28 17.336h-6.635c-2.406 0-4.666 1.154-6.076 3.103l-13.033 18.009-13.033-18.01c-1.41-1.948-3.67-3.103-6.076-3.103h-81.302c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h77.472l16.863 23.302c1.41 1.948 3.67 3.103 6.076 3.103s4.666-1.154 6.076-3.103l16.863-23.302h2.805c17.799 0 32.28-14.506 32.28-32.336 0-17.828-14.481-32.334-32.28-32.334h-189.048c-17.799 0-32.28 14.506-32.28 32.336 0 17.829 14.481 32.335 32.28 32.335z"></path><path d="m109.855 253.936c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5v-40c0-4.143-3.358-7.5-7.5-7.5h-32.499v-25h32.499c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-39.999c-4.142 0-7.5 3.357-7.5 7.5v40c0 4.143 3.358 7.5 7.5 7.5h32.499v25z"></path><path d="m224.852 188.936c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-39.999c-4.142 0-7.5 3.357-7.5 7.5v80c0 4.143 3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.499v-25h32.499c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.499v-25z"></path><path d="m259.852 173.936c-4.142 0-7.5 3.357-7.5 7.5v80c0 4.143 3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5v-80c0-4.143-3.358-7.5-7.5-7.5zm32.499 80h-24.999v-65h24.999z"></path><path d="m511.987 345.242c-.001-3.688-2.683-6.827-6.325-7.404l-10.348-1.642-4.939-11.919 6.154-8.489c2.164-2.985 1.837-7.1-.77-9.706l-21.182-21.18c-2.61-2.609-6.729-2.934-9.713-.763l-8.471 6.158-11.914-4.934-1.647-10.352c-.579-3.642-3.72-6.321-7.407-6.321h-.003l-29.945.012c-3.688.001-6.829 2.685-7.405 6.328l-1.639 10.357-11.903 4.939-8.479-6.154c-2.987-2.168-7.106-1.842-9.712.77l-21.167 21.195c-2.605 2.608-2.928 6.724-.762 9.706l6.157 8.48-4.933 11.929-10.341 1.648c-3.642.58-6.321 3.722-6.32 7.409l.012 29.965c.001 3.688 2.684 6.827 6.326 7.404l10.347 1.641 4.939 11.919-6.154 8.489c-2.164 2.985-1.837 7.1.769 9.706l21.181 21.181c2.608 2.607 6.727 2.934 9.713.763l8.471-6.158 11.913 4.934 1.647 10.352c.58 3.642 3.72 6.321 7.407 6.321h.003l29.945-.013c3.688-.002 6.828-2.685 7.404-6.327l1.64-10.358 11.904-4.939 8.479 6.155c2.986 2.168 7.105 1.841 9.712-.77l21.167-21.195c2.605-2.608 2.928-6.723.763-9.706l-6.157-8.481 4.933-11.929 10.341-1.647c3.642-.58 6.322-3.722 6.32-7.409zm-23.154 24.869c-2.576.41-4.754 2.13-5.751 4.54l-8.141 19.686c-.996 2.409-.67 5.163.861 7.272l4.863 6.698-12.118 12.135-6.694-4.859c-2.113-1.533-4.87-1.858-7.28-.858l-19.661 8.158c-2.409 1-4.125 3.179-4.533 5.755l-1.295 8.18-17.138.007-1.301-8.173c-.41-2.575-2.128-4.753-4.538-5.751l-19.672-8.146c-.924-.383-1.898-.57-2.869-.57-1.561 0-3.108.487-4.411 1.434l-6.686 4.86-12.125-12.125 4.861-6.706c1.53-2.111 1.854-4.865.856-7.273l-8.151-19.675c-.999-2.41-3.178-4.128-5.754-4.536l-8.171-1.296-.007-17.16 8.165-1.302c2.576-.41 4.754-2.13 5.75-4.54l8.141-19.686c.997-2.409.67-5.163-.862-7.272l-4.863-6.698 12.118-12.134 6.694 4.858c2.113 1.535 4.871 1.858 7.28.858l19.661-8.158c2.409-1 4.125-3.18 4.533-5.756l1.294-8.179 17.138-.006 1.3 8.173c.41 2.575 2.128 4.753 4.538 5.751l19.673 8.146c2.412.998 5.168.671 7.279-.863l6.686-4.86 12.126 12.125-4.861 6.705c-1.53 2.111-1.854 4.865-.856 7.273l8.153 19.674c.999 2.41 3.178 4.128 5.754 4.536l8.172 1.296.007 17.161z"></path><path d="m452.329 352.759c-4.142 0-7.5 3.357-7.5 7.5 0 13.423-10.92 24.343-24.342 24.343s-24.342-10.92-24.342-24.343 10.92-24.343 24.342-24.343c3.515 0 6.904.731 10.071 2.173 3.771 1.718 8.218.051 9.934-3.719 1.716-3.771.051-8.218-3.719-9.934-5.132-2.336-10.611-3.521-16.286-3.521-21.693 0-39.342 17.649-39.342 39.343s17.649 39.343 39.342 39.343 39.342-17.649 39.342-39.343c0-4.142-3.358-7.499-7.5-7.499z"></path></svg>
    </div>
    <div className="z-10 p-2 text-sm text-center text-gray-500" style={{ zIndex: 10, padding: '8px', fontSize: '0.875rem', color: '#6B7280' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!
    </div>
  </div>
</div>





<div  className='mx-auto'>
  
    <div
      className=" mx-auto relative flex flex-col items-center justify-around p-4   h-80 rounded-2xl"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '16px',  width: '20rem', height: '20rem', borderRadius: '16px', transform: 'translate(0px, 0px)', opacity: 1 }}
    >
      <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-indigo-300 rounded-xl -rotate-2" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', color: 'white', transform: 'scaleX(1.05) scaleY(0.95)', backgroundColor: '#A855F7', borderRadius: '16px', transformOrigin: 'center', rotate: '-2deg' }}></div>
      <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-indigo-400 rounded-xl rotate-2" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', color: 'white', transform: 'scaleX(1.05) scaleY(0.95)', backgroundColor: '#9333EA', borderRadius: '16px', transformOrigin: 'center', rotate: '2deg' }}></div>
      <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '16px', transform: 'scaleX(1.05) scaleY(0.95)', transformOrigin: 'center' }}></div>
      <h3 className="z-10 p-2 text-2xl font-semibold text-indigo-900" style={{ zIndex: 10, padding: '8px', fontSize: '1.5rem', fontWeight: '600', color: '#7C3AED' }}>SEO</h3>
      <div className="z-10 p-2 text-indigo-900" style={{ zIndex: 10, padding: '8px', color: '#7C3AED' }}>
<svg className="fill-current" height="96" viewBox="0 0 512 512" width="96"><path d="m123.806 105h234.55c21.146 0 38.349 17.271 38.349 38.5v102.556c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-102.556c0-29.5-23.932-53.5-53.349-53.5h-234.55c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m306.358 336.556h-141.431c-2.201 0-4.291.967-5.716 2.645l-42.497 50.021-42.496-50.022c-1.425-1.678-3.515-2.645-5.716-2.645h-15.153c-21.146 0-38.349-17.271-38.349-38.5v-154.555c0-21.229 17.203-38.5 38.349-38.5h35.679c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-35.679c-29.417 0-53.349 24-53.349 53.5v154.556c0 29.5 23.932 53.5 53.349 53.5h11.684l45.966 54.105c1.425 1.678 3.515 2.645 5.716 2.645s4.291-.967 5.716-2.645l45.966-54.105h137.961c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m221.328 447.329h-68.184c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h68.184c9.528 0 17.28 7.776 17.28 17.335s-7.752 17.336-17.28 17.336h-189.048c-9.528 0-17.28-7.777-17.28-17.336s7.752-17.335 17.28-17.335h6.635c2.406 0 4.666-1.154 6.076-3.103l13.033-18.009 13.033 18.009c1.41 1.948 3.67 3.103 6.076 3.103h41.332c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-37.502l-16.863-23.302c-1.41-1.948-3.67-3.103-6.076-3.103s-4.666 1.154-6.076 3.103l-16.863 23.302h-2.805c-17.799 0-32.28 14.506-32.28 32.335 0 17.83 14.481 32.336 32.28 32.336h189.048c17.799 0 32.28-14.506 32.28-32.336 0-17.829-14.481-32.335-32.28-32.335z"></path><path d="m290.659 64.671h28.213c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-28.213c-9.528 0-17.28-7.776-17.28-17.335s7.752-17.336 17.28-17.336h189.048c9.528 0 17.28 7.776 17.28 17.335s-7.752 17.336-17.28 17.336h-6.635c-2.406 0-4.666 1.154-6.076 3.103l-13.033 18.009-13.033-18.01c-1.41-1.948-3.67-3.103-6.076-3.103h-81.302c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h77.472l16.863 23.302c1.41 1.948 3.67 3.103 6.076 3.103s4.666-1.154 6.076-3.103l16.863-23.302h2.805c17.799 0 32.28-14.506 32.28-32.336 0-17.828-14.481-32.334-32.28-32.334h-189.048c-17.799 0-32.28 14.506-32.28 32.336 0 17.829 14.481 32.335 32.28 32.335z"></path><path d="m109.855 253.936c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5v-40c0-4.143-3.358-7.5-7.5-7.5h-32.499v-25h32.499c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-39.999c-4.142 0-7.5 3.357-7.5 7.5v40c0 4.143 3.358 7.5 7.5 7.5h32.499v25z"></path><path d="m224.852 188.936c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-39.999c-4.142 0-7.5 3.357-7.5 7.5v80c0 4.143 3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.499v-25h32.499c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.499v-25z"></path><path d="m259.852 173.936c-4.142 0-7.5 3.357-7.5 7.5v80c0 4.143 3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5v-80c0-4.143-3.358-7.5-7.5-7.5zm32.499 80h-24.999v-65h24.999z"></path><path d="m511.987 345.242c-.001-3.688-2.683-6.827-6.325-7.404l-10.348-1.642-4.939-11.919 6.154-8.489c2.164-2.985 1.837-7.1-.77-9.706l-21.182-21.18c-2.61-2.609-6.729-2.934-9.713-.763l-8.471 6.158-11.914-4.934-1.647-10.352c-.579-3.642-3.72-6.321-7.407-6.321h-.003l-29.945.012c-3.688.001-6.829 2.685-7.405 6.328l-1.639 10.357-11.903 4.939-8.479-6.154c-2.987-2.168-7.106-1.842-9.712.77l-21.167 21.195c-2.605 2.608-2.928 6.724-.762 9.706l6.157 8.48-4.933 11.929-10.341 1.648c-3.642.58-6.321 3.722-6.32 7.409l.012 29.965c.001 3.688 2.684 6.827 6.326 7.404l10.347 1.641 4.939 11.919-6.154 8.489c-2.164 2.985-1.837 7.1.769 9.706l21.181 21.181c2.608 2.607 6.727 2.934 9.713.763l8.471-6.158 11.913 4.934 1.647 10.352c.58 3.642 3.72 6.321 7.407 6.321h.003l29.945-.013c3.688-.002 6.828-2.685 7.404-6.327l1.64-10.358 11.904-4.939 8.479 6.155c2.986 2.168 7.105 1.841 9.712-.77l21.167-21.195c2.605-2.608 2.928-6.723.763-9.706l-6.157-8.481 4.933-11.929 10.341-1.647c3.642-.58 6.322-3.722 6.32-7.409zm-23.154 24.869c-2.576.41-4.754 2.13-5.751 4.54l-8.141 19.686c-.996 2.409-.67 5.163.861 7.272l4.863 6.698-12.118 12.135-6.694-4.859c-2.113-1.533-4.87-1.858-7.28-.858l-19.661 8.158c-2.409 1-4.125 3.179-4.533 5.755l-1.295 8.18-17.138.007-1.301-8.173c-.41-2.575-2.128-4.753-4.538-5.751l-19.672-8.146c-.924-.383-1.898-.57-2.869-.57-1.561 0-3.108.487-4.411 1.434l-6.686 4.86-12.125-12.125 4.861-6.706c1.53-2.111 1.854-4.865.856-7.273l-8.151-19.675c-.999-2.41-3.178-4.128-5.754-4.536l-8.171-1.296-.007-17.16 8.165-1.302c2.576-.41 4.754-2.13 5.75-4.54l8.141-19.686c.997-2.409.67-5.163-.862-7.272l-4.863-6.698 12.118-12.134 6.694 4.858c2.113 1.535 4.871 1.858 7.28.858l19.661-8.158c2.409-1 4.125-3.18 4.533-5.756l1.294-8.179 17.138-.006 1.3 8.173c.41 2.575 2.128 4.753 4.538 5.751l19.673 8.146c2.412.998 5.168.671 7.279-.863l6.686-4.86 12.126 12.125-4.861 6.705c-1.53 2.111-1.854 4.865-.856 7.273l8.153 19.674c.999 2.41 3.178 4.128 5.754 4.536l8.172 1.296.007 17.161z"></path><path d="m452.329 352.759c-4.142 0-7.5 3.357-7.5 7.5 0 13.423-10.92 24.343-24.342 24.343s-24.342-10.92-24.342-24.343 10.92-24.343 24.342-24.343c3.515 0 6.904.731 10.071 2.173 3.771 1.718 8.218.051 9.934-3.719 1.716-3.771.051-8.218-3.719-9.934-5.132-2.336-10.611-3.521-16.286-3.521-21.693 0-39.342 17.649-39.342 39.343s17.649 39.343 39.342 39.343 39.342-17.649 39.342-39.343c0-4.142-3.358-7.499-7.5-7.499z"></path></svg>
      </div>
      <div className="z-10 p-2 text-sm text-center text-gray-500" style={{ zIndex: 10, padding: '8px', fontSize: '0.875rem', color: '#6B7280' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!
      </div>
    </div>
  </div>









  <div  className='mx-auto'> 
  
    <div
      className=" mx-auto relative flex flex-col items-center justify-around p-4   h-80 rounded-2xl"
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '16px',  width: '20rem', height: '20rem', borderRadius: '16px', transform: 'translate(0px, 0px)', opacity: 1 }}
    >
      <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-indigo-300 rounded-xl -rotate-2" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', color: 'white', transform: 'scaleX(1.05) scaleY(0.95)', backgroundColor: '#A855F7', borderRadius: '16px', transformOrigin: 'center', rotate: '-2deg' }}></div>
      <div className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-indigo-400 rounded-xl rotate-2" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', color: 'white', transform: 'scaleX(1.05) scaleY(0.95)', backgroundColor: '#9333EA', borderRadius: '16px', transformOrigin: 'center', rotate: '2deg' }}></div>
      <div className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl" style={{ position: 'absolute', zIndex: -1, width: '100%', height: '100%', backgroundColor: 'white', borderRadius: '16px', transform: 'scaleX(1.05) scaleY(0.95)', transformOrigin: 'center' }}></div>
      <h3 className="z-10 p-2 text-2xl font-semibold text-indigo-900" style={{ zIndex: 10, padding: '8px', fontSize: '1.5rem', fontWeight: '600', color: '#7C3AED' }}>SEO</h3>
      <div className="z-10 p-2 text-indigo-900" style={{ zIndex: 10, padding: '8px', color: '#7C3AED' }}>
<svg className="fill-current" height="96" viewBox="0 0 512 512" width="96"><path d="m123.806 105h234.55c21.146 0 38.349 17.271 38.349 38.5v102.556c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-102.556c0-29.5-23.932-53.5-53.349-53.5h-234.55c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"></path><path d="m306.358 336.556h-141.431c-2.201 0-4.291.967-5.716 2.645l-42.497 50.021-42.496-50.022c-1.425-1.678-3.515-2.645-5.716-2.645h-15.153c-21.146 0-38.349-17.271-38.349-38.5v-154.555c0-21.229 17.203-38.5 38.349-38.5h35.679c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-35.679c-29.417 0-53.349 24-53.349 53.5v154.556c0 29.5 23.932 53.5 53.349 53.5h11.684l45.966 54.105c1.425 1.678 3.515 2.645 5.716 2.645s4.291-.967 5.716-2.645l45.966-54.105h137.961c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m221.328 447.329h-68.184c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h68.184c9.528 0 17.28 7.776 17.28 17.335s-7.752 17.336-17.28 17.336h-189.048c-9.528 0-17.28-7.777-17.28-17.336s7.752-17.335 17.28-17.335h6.635c2.406 0 4.666-1.154 6.076-3.103l13.033-18.009 13.033 18.009c1.41 1.948 3.67 3.103 6.076 3.103h41.332c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-37.502l-16.863-23.302c-1.41-1.948-3.67-3.103-6.076-3.103s-4.666 1.154-6.076 3.103l-16.863 23.302h-2.805c-17.799 0-32.28 14.506-32.28 32.335 0 17.83 14.481 32.336 32.28 32.336h189.048c17.799 0 32.28-14.506 32.28-32.336 0-17.829-14.481-32.335-32.28-32.335z"></path><path d="m290.659 64.671h28.213c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-28.213c-9.528 0-17.28-7.776-17.28-17.335s7.752-17.336 17.28-17.336h189.048c9.528 0 17.28 7.776 17.28 17.335s-7.752 17.336-17.28 17.336h-6.635c-2.406 0-4.666 1.154-6.076 3.103l-13.033 18.009-13.033-18.01c-1.41-1.948-3.67-3.103-6.076-3.103h-81.302c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h77.472l16.863 23.302c1.41 1.948 3.67 3.103 6.076 3.103s4.666-1.154 6.076-3.103l16.863-23.302h2.805c17.799 0 32.28-14.506 32.28-32.336 0-17.828-14.481-32.334-32.28-32.334h-189.048c-17.799 0-32.28 14.506-32.28 32.336 0 17.829 14.481 32.335 32.28 32.335z"></path><path d="m109.855 253.936c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5v-40c0-4.143-3.358-7.5-7.5-7.5h-32.499v-25h32.499c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-39.999c-4.142 0-7.5 3.357-7.5 7.5v40c0 4.143 3.358 7.5 7.5 7.5h32.499v25z"></path><path d="m224.852 188.936c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-39.999c-4.142 0-7.5 3.357-7.5 7.5v80c0 4.143 3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.499v-25h32.499c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.499v-25z"></path><path d="m259.852 173.936c-4.142 0-7.5 3.357-7.5 7.5v80c0 4.143 3.358 7.5 7.5 7.5h39.999c4.142 0 7.5-3.357 7.5-7.5v-80c0-4.143-3.358-7.5-7.5-7.5zm32.499 80h-24.999v-65h24.999z"></path><path d="m511.987 345.242c-.001-3.688-2.683-6.827-6.325-7.404l-10.348-1.642-4.939-11.919 6.154-8.489c2.164-2.985 1.837-7.1-.77-9.706l-21.182-21.18c-2.61-2.609-6.729-2.934-9.713-.763l-8.471 6.158-11.914-4.934-1.647-10.352c-.579-3.642-3.72-6.321-7.407-6.321h-.003l-29.945.012c-3.688.001-6.829 2.685-7.405 6.328l-1.639 10.357-11.903 4.939-8.479-6.154c-2.987-2.168-7.106-1.842-9.712.77l-21.167 21.195c-2.605 2.608-2.928 6.724-.762 9.706l6.157 8.48-4.933 11.929-10.341 1.648c-3.642.58-6.321 3.722-6.32 7.409l.012 29.965c.001 3.688 2.684 6.827 6.326 7.404l10.347 1.641 4.939 11.919-6.154 8.489c-2.164 2.985-1.837 7.1.769 9.706l21.181 21.181c2.608 2.607 6.727 2.934 9.713.763l8.471-6.158 11.913 4.934 1.647 10.352c.58 3.642 3.72 6.321 7.407 6.321h.003l29.945-.013c3.688-.002 6.828-2.685 7.404-6.327l1.64-10.358 11.904-4.939 8.479 6.155c2.986 2.168 7.105 1.841 9.712-.77l21.167-21.195c2.605-2.608 2.928-6.723.763-9.706l-6.157-8.481 4.933-11.929 10.341-1.647c3.642-.58 6.322-3.722 6.32-7.409zm-23.154 24.869c-2.576.41-4.754 2.13-5.751 4.54l-8.141 19.686c-.996 2.409-.67 5.163.861 7.272l4.863 6.698-12.118 12.135-6.694-4.859c-2.113-1.533-4.87-1.858-7.28-.858l-19.661 8.158c-2.409 1-4.125 3.179-4.533 5.755l-1.295 8.18-17.138.007-1.301-8.173c-.41-2.575-2.128-4.753-4.538-5.751l-19.672-8.146c-.924-.383-1.898-.57-2.869-.57-1.561 0-3.108.487-4.411 1.434l-6.686 4.86-12.125-12.125 4.861-6.706c1.53-2.111 1.854-4.865.856-7.273l-8.151-19.675c-.999-2.41-3.178-4.128-5.754-4.536l-8.171-1.296-.007-17.16 8.165-1.302c2.576-.41 4.754-2.13 5.75-4.54l8.141-19.686c.997-2.409.67-5.163-.862-7.272l-4.863-6.698 12.118-12.134 6.694 4.858c2.113 1.535 4.871 1.858 7.28.858l19.661-8.158c2.409-1 4.125-3.18 4.533-5.756l1.294-8.179 17.138-.006 1.3 8.173c.41 2.575 2.128 4.753 4.538 5.751l19.673 8.146c2.412.998 5.168.671 7.279-.863l6.686-4.86 12.126 12.125-4.861 6.705c-1.53 2.111-1.854 4.865-.856 7.273l8.153 19.674c.999 2.41 3.178 4.128 5.754 4.536l8.172 1.296.007 17.161z"></path><path d="m452.329 352.759c-4.142 0-7.5 3.357-7.5 7.5 0 13.423-10.92 24.343-24.342 24.343s-24.342-10.92-24.342-24.343 10.92-24.343 24.342-24.343c3.515 0 6.904.731 10.071 2.173 3.771 1.718 8.218.051 9.934-3.719 1.716-3.771.051-8.218-3.719-9.934-5.132-2.336-10.611-3.521-16.286-3.521-21.693 0-39.342 17.649-39.342 39.343s17.649 39.343 39.342 39.343 39.342-17.649 39.342-39.343c0-4.142-3.358-7.499-7.5-7.499z"></path></svg>
      </div>
      <div className="z-10 p-2 text-sm text-center text-gray-500" style={{ zIndex: 10, padding: '8px', fontSize: '0.875rem', color: '#6B7280' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!
      </div>
    </div>
  </div>




      </section>
    </>
  )
}

export default Service