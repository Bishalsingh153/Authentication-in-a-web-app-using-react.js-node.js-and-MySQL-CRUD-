import React from 'react';
import F1 from "../Images/f1.jpg";

const Register = () => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '> 
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={F1} alt="" />
        </div>
        
        <div className='bg-gray-100 flex flex-col justify-center h-screen bg-gradient-to-b from-black to-black'>
            <form className='max-w-[400px] w-full mx-auto bg-black p-4'>
                <h2 className='text-4xl font-bold text-center py-6 text-[#00df9a]'>REGISTER</h2>


                <div className='flex flex-col py-2'>
                    <label className='text-white '>Your Email Address</label>
                    <input className='border p-2 rounded-xl' type="text"/>
                </div>

                <div className='flex flex-col py-2'>
                    <label className='text-white'>Username</label>
                    <input className='border p-2 rounded-xl' type ="text"/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-white'>Password</label>
                    <input className='border p-2 rounded-xl' type="text"/>
                </div>

                <div className='flex flex-col py-2'>
                    <label className='text-white'>Institution Associated With</label>
                    <input className='border p-2 rounded-xl' type="text"/>
                </div>


                <button className='flex justify-center bg-[#00df9a] w-[150px] rounded-full font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a]'>Register</button>
                
            </form>
        </div>
            
        </div>
    )
}
export default Register;