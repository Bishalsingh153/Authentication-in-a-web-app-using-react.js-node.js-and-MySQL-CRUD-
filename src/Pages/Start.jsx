import React from 'react'
import F1 from "../Images/f1.jpg";
import { useNavigate } from 'react-router-dom';

function Start() {
    const navigate = useNavigate()
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '> 
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={F1} alt="" /> 
        </div>
        
        <div className='bg-gray-100 flex flex-col justify-center h-screen bg-gradient-to-b from-black to-black'>
            
                <h2 className='text-4xl font-bold text-center py-6 text-[#00df9a]'>LOGIN AS</h2>
               <div className='d-flex justify-content-centre gap-7 ml-[260px] mt-4 w-full mx-auto p-10 flex-col max-w-[400px]'>
                <button className='btn btn-primary btn-lg' onClick={e => navigate('/UserLogin') }>User</button>
                <button className='btn btn-success btn-lg' onClick={e => navigate('/login') }>Admin</button>
               </div>
                
        </div>
            
        </div>
    )
}

export default Start;