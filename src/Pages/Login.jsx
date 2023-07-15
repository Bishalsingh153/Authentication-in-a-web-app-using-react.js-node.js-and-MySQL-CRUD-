import React, { useState } from 'react';
import Admin from "../Images/admin.gif";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const[values,setValues]= useState({
    Username:"",
    Password:""
  })


  const navigate =useNavigate()
  axios.defaults.withCredentials = true;


  const[error,setError] = useState('')

  const handleSubmit =(event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login',values)
    .then(res => {
        if(res.data.Status === 'Success'){
               navigate('/dashboard');
        }else {
              setError(res.data.Error);
        }
    })
    .catch(err => console.log(err));
  }
  

    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full '> 
        <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={Admin} alt="" />
        </div>
        
        <div className='bg-gray-100 flex flex-col justify-center h-screen bg-gradient-to-b from-black to-black'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-black p-4'>
                <h2 className='text-4xl font-bold text-center py-6 text-[#00df9a]'>LOGIN</h2>
                <div className='text-danger'>
                {error && error}
            </div>
                <div className='flex flex-col py-2'>
                    <label className='text-white '>Username</label>
                    <input onChange={e =>setValues({...values,username: e.target.value})}  className='border p-2 rounded-xl' type ="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='text-white'>Password</label>
                    <input onChange={e =>setValues({...values,password: e.target.value})}  className='border p-2 rounded-xl' type="password"/>
                </div>
                <button className='flex justify-center bg-[#00df9a] w-[150px] rounded-full font-medium my-6 mx-auto py-3 text-black hover:bg-[#00df9a]'>Sign In</button>
                
            </form>
        </div>
            
        </div>
    )
}
export default Login;