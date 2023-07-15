import React from 'react'
import Abouts from '../Images/abouts.jpg';

const About =() => {
    return(
        <div className='sm:block min-h-screen bg-gradient-to-b from-black to-black max-w-[5000px] '>
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-4xl text-xl font-bold py-2'>Why use our tracking system?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis rerum accusamus eligendi vitae maxime ab porro quod rem reprehenderit quo suscipit, laboriosam consectetur maiores quas. Delectus ab provident numquam.</p>
                </div>
                 <div className='my-4'>
                 <img className='rounded-full w-[300px] ml-[20px] ' src={Abouts} alt="/" />
                 
                 
                    
                 
                 </div>
                 </div>
            </div>
        </div>
        
    )
}
export default About;