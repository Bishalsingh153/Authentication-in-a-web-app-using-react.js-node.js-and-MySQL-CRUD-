import React from 'react'
import Typed from 'react-typed'
import {Link} from 'react-router-dom';
const Hero= () =>{
    return(
        <div className='h-screen bg-gradient-to-b from-black to-black '>
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-50px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2 mt-[-1400px]'> FOR YOUR LOVED ONES</p>
          <h1 className='md:text-7xl sm:text:-6xl text -4xl font-bold md:py-6'>BUS TRACKING SYSTEM</h1>
          <div>
            <p className='md:text-5xl sm:text-4xl text-xs font-bold py-4 '>A shadow of you in your absence.</p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xs font-bold md:pl-4 pl-2 '
            strings={['Now kick out chaos','and save your time']} typeSpeed={120} backSpeed={140} loop ></Typed>
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Now track your bus and always save your time thus ensuring smooth ride</p>
           <Link to='/start'  className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</Link> 
            </div>
        </div>
        </div>
    )
}
export default Hero