import React,{ useEffect, useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';


  function Dashboard(){
//const Dashboard = () =>{
 // const [nav, setNav]= useState(false)

  
   
  //const handleNav = () => {
   //setNav(!nav)
   //}


   const navigate = useNavigate()
   axios.defaults.withCredentials = true;
    useEffect(() =>{
      axios.get('http://localhost:8081/dashboard')
      .then(res =>{
        if(res.data.Status === "Success") {
          if(res.data.role === "admin") {
            navigate('/dashboard')
          } else {
            const id = res.data.id;
        navigate('/userdetail/'+id)
          }
        } else {
            navigate('/start')
        }
      })
    }, [])
   
   const handleLogout = () => {
      axios.get('http://localhost:8081/logout')
      .then(res => {
        navigate('/')
        //navigate('/start')
      }).catch(err => console.log(err));
   }


    
    const [adminCount, setAdminCount] = useState()
    const [userCount, setUserCount] = useState()
    useEffect(() => {
      axios.get('http://localhost:8081/adminCount')
      .then(res => {
        setAdminCount(res.data[0].admin)
      }).catch(err => console.log(err));

       

      axios.get('http://localhost:8081/userCount')
      .then(res => {
        setUserCount(res.data[0].user)
      }).catch(err => console.log(err));

    }, [])


    return(
        
        <div className='h-screen bg-gradient-to-b from-black to-black '>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Admin Panel</h1>
            <ul className='hidden md:flex'>
                <Link className='p-4 text-white' to='/Driver'><li>Drivers Profile</li></Link>
                <Link className='p-4 text-white' to='/user'><li>Users Profile</li></Link>
                <li className='p-4'>Parents Profile</li>
                <li className='p-4'>My Feed</li>


            <li onClick={handleLogout}><a href="#"><button className='p-4 text-black bg-[#00df9a] w=[100px] rounded-full font medium my-6 mx-auto py-3'>Logout</button></a></li>
               
                
            </ul>
        {/* <div onClick={handleNav} className='block md:hidden'> 
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}  
                  
    </div>  */}
         {/* <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500 text-white' : 'fixed left-[-100%] '}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Admin Panel</h1>
                <ul className='uppercase p-4'>
                <li className=' p-4 border-b border-gray-600'>Drivers Profile</li>
                <li className='p-4 border-b border-gray-600' >User Profile</li>
                <li className='p-4 border-b border-gray-600'>Parents Profile</li>
                <li className='p-4 border-b border-gray-600'>My feed</li>
                <Link className='p-4  border-gray-600 link'to='/'><li className='p-4 text-white mt-[-26px] '>Logout</li></Link>

                </ul>
</div>  */}
        </div>
           
        <div className=" mt-[100px] w-1/5 pb-1/2 bg-yellow-300 p-3 d-flex justify-content-around rounded-xl ml-[20px]">
            <div className='p-3 border-black'>
                <p className='font-bold text-xl'>Admin</p>
                <hr/>
                <p className='font-bold text-xl'>Total :{adminCount}</p>
            </div>
        </div>


        <div className=" mt-[-167px] w-1/5 pb-1/2 bg-red-500 p-3 d-flex justify-content-around rounded-xl ml-[500px] ">
            <div className='p-3 border-black'>
                <p className='font-bold text-xl'>Users</p>
                <hr/>
                <p className='font-bold text-xl'>Total :{userCount}</p>
            </div>
        </div>


        <div className=" mt-[-167px] w-1/5 pb-1/2 bg-blue-500 p-3 d-flex justify-content-around rounded-xl ml-[1000px]">
            <div className='p-3 border-black'>
                <p className='font-bold text-xl'>Driver</p>
                <hr/>
                <p className='font-bold text-xl text-black'>Total :{}</p>
            </div>
        </div>
         {/*List of Admins*/}
          <div className='mt-4 px-5 pt-3]'>
            <h3 className='text-white'>List of Admins</h3>
            <table className='table text-white'>
                <thead>
                    <tr>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>Guest Gupta</td>
                    <td>Admin</td>
                   </tr>
                </tbody>
            </table>
          </div>
            
            
            </div>
       
            
        
        
    
    )
}

export default Dashboard;
