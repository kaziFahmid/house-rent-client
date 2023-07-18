import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Circles } from 'react-loader-spinner'

export default function Main() {
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
 
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
 
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Circles
            height={80}
            width={80}
            color="#EF4444"
            ariaLabel="circles-loading"
            visible={true}
          />
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
 
    
  )
}
