import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';

function DriverEdit() {
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        busid:'',
        
    })
    const navigate = useNavigate()
   
    const {id} = useParams();


    useEffect(()=> {
        axios.get('http://localhost:8081/get/' +id)
     .then(res => console.log(res))
     .catch(err => console.log(err));
    }, [] )

     const handleSubmit = (event) =>{
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("busid", data.busid);
        
        axios.post('http://localhost:8081/adddriver', formdata)
        .then(res => {
         navigate('/driver')
        })
        .catch(err => console.log(err));
     }


    return (
        <div className='h-screen bg-gradient-to-b from-black to-black '>
           
        <div className='d-flex-column align-items-center pt-5'>
            <h2 className='ml-[500px] mb-[20px] text-white'>Update Driver</h2>
            <form className='row g-3 w-50 ' onSubmit={handleSubmit}>
              

            <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputname' class="form-label text-white">Name</label>
                    <input type="text" class="form-control" id="inputname" placeholder="Enter Name"
                   onChange={e => setData({...data,name: e.target.value})}/>
                </div>


                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputEmail' class="form-label text-white">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email"
                    onChange={e => setData({...data,email: e.target.value})}/>
                </div>

                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputPassword' class="form-label text-white">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Enter Password"
                    onChange={e => setData({...data,password: e.target.value})}/>
                </div>

                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputBusid' class="form-label text-white">Busid</label>
                    <input type="text" class="form-control" id="inputBusid" placeholder="Enter Busid"
                   onChange={e => setData({...data,busid: e.target.value})}/>
                </div>
                
               <div class="col-12 ml-[500px] mb-[20px]">
               <button type="submit" class="btn btn-primary mb-[20px]">Update</button>
               </div>
            </form>
        </div>
        </div>
    )
}

export default DriverEdit;