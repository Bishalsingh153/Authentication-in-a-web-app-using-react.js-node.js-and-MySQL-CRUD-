 import react from 'react';
 import Locationicon from '../Images/locationicon.jpg'
 import Timeicon from '../Images/timeicon.jpg'
 import Emergencyicon from '../Images/emergencyicon.jpg'

 const Features = () => {
    return(

        <div className='w-full bg-white py-16 px-4 mt-[-500px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='mt-[220px]' src={Locationicon} alt="/" />
                <div>
                    <h3 className='mt-[200px]'>USES DRIVERS PHONES LOCATION</h3>
                    <p className='text-lg'>And Give You Timely updates</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis magnam voluptatem, quisquam accusamus recusandae repellat ipsa nisi, dignissimos dolorem deleniti suscipit veniam pariatur eligendi. Architecto sunt accusamus voluptatem quam!</p>
                </div>

            </div>
        
            <div className='w-full bg-white py-16 px-4 mt-[-70px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[220px] mx-auto-py my-4 rounded-full ml-[70px]' src={Timeicon} alt="/" />
                <div>
                    <h3 className='mt-[45px]'>SAVES TIME</h3>
                    <p className='text-lg'>By Giving You timely estimates for your stoppage</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis magnam voluptatem, quisquam accusamus recusandae repellat ipsa nisi, dignissimos dolorem deleniti suscipit veniam pariatur eligendi. Architecto sunt accusamus voluptatem quam!</p>
                </div>

            </div>
        
    
             

        </div>

        <div className='w-full bg-white py-16 px-4 mt-[-70px]'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[250px] mx-auto-py my-4 rounded-full ml-[70px]' src={Emergencyicon} alt="/" />
                <div>
                    <h3 className='mt-[45px]'>Emergency and SOS Alert</h3>
                    <p className='text-lg'>Has A System through which SOS can be sended to the selected number</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis magnam voluptatem, quisquam accusamus recusandae repellat ipsa nisi, dignissimos dolorem deleniti suscipit veniam pariatur eligendi. Architecto sunt accusamus voluptatem quam!</p>
                </div>

            </div>

        </div>


        

        </div>
        


         
    )
 }
 export default Features;