import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-router-dom';


const Navbar = () =>{
   const [nav, setNav]= useState(false)
   
   const handleNav = () => {
    setNav(!nav)
   }

    return(
        <div className='h-screen bg-gradient-to-b from-black to-black '>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ADBU</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Features</li>
                <li className='p-4'>About</li>
                <Link className='Link'to="/start"><li className='p-4 text-white'>Login</li></Link>
                
            </ul>
            <div onClick={handleNav} className='block md:hidden'> 
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
              
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500 text-white' : 'fixed left-[-100%] '}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT</h1>
                <ul className='uppercase p-4'>
                <li className=' p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Features</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <Link className='p-4  border-gray-600 link'to='/start'><li className='p-4 text-white mt-[-26px]'>Login</li></Link>

                </ul>
            </div>
        </div>
        </div>
        
    
    )
}

export default Navbar;