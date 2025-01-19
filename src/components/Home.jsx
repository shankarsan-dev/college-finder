//import { Navbar } from '@material-tailwind/react'
import React from 'react';
import CollegeList from "./CollegeList";
import Footer from './Footer';
import Hero from './Hero';
import Navbar from "./Navbar";
function Home() {
  return (
  <><div className='bg-slate-300 '>
<Navbar/>
     <Hero/>
     <h1 className='text-center text-[70px] text-blue-800'>Popular Courses</h1>
     <CollegeList/>
     <Footer/>
  </div>
   
  </>
 
  )
}

export default Home