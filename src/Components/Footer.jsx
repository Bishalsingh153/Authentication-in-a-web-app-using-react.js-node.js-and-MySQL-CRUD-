import React from 'react'
import  {FaDribbbleSquare,FaFacebookSquare,FaGithubSquare,FaInstagramSquare,FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, iusto deserunt natus odio tempore tempora totam quaerat! Totam quam consectetur, architecto obcaecati doloremque atque ab. Veniam ab assumenda perspiciatis tempora?</p>
           <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>
           </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-black'>Explore</h6>
                    <ul>
                        <li className='py-2 text-sm'>Vision</li>
                        <li className='py-2 text-sm'>About Project</li>
                        <li className='py-2 text-sm'>How it started</li>
                        <li className='py-2 text-sm'>Our clients</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-black'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                        <li className='py-2 text-sm'>Our clients</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-black'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Objectives</li>
                        <li className='py-2 text-sm'>Terms</li>
                        <li className='py-2 text-sm'>Contact Us</li>
                    </ul>
                </div>

                <div>
                    <h6 className='font-medium text-black'>Others</h6>
                    <ul>
                        <li className='py-2 text-sm'>Who are we</li>
                        <li className='py-2 text-sm'>Reviews</li>
                        <li className='py-2 text-sm'>How it started</li>
                        
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Footer;