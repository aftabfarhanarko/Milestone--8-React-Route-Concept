// Root.jsx
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
  const navagetions = useNavigation();
  const togle = Boolean(navagetions.location);
  return (
    <div className='max-w-[1000px] mx-auto text-center'>
      <Navbar />
      {togle && <h1>Loding...........</h1>}
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default Root
