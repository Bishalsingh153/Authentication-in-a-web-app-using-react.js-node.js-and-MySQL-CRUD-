import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    const [data, setData] = useState({
           name:"",
           email:"",
           password:"",
           address:"",
           image:""
        })
        const navigate = useNavigate()
        const handleSubmit = (event)=>{
            event.preventDefault();
            const formdata= new FormData();
            formdata.append("name",data.name);
            formdata.append("email",data.email);
            formdata.append("password",data.password);
            formdata.append("address",data.address);
            formdata.append("image",data.image);
            axios.post('http://localhost:8081/create',formdata)
            .then(res => {
               navigate('/user')
            })
            .catch(err => console.log(err));
        }
    return (
        <div className='h-screen bg-gradient-to-b from-black to-black '>
           
        <div className='d-flex-column align-items-center pt-5'>
            <h2 className='ml-[500px] mb-[20px] text-white'>Add User</h2>
            <form className='row g-3 w-50 ' onSubmit={handleSubmit}>
              

            <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputname' class="form-label text-white">Name</label>
                    <input type="text" class="form-control" id="inputname" placeholder="Enter Name"
                   onChange={e => setData({...data,name: e.target.value})} />
                </div>


                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputEmail' class="form-label text-white">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email"
                   onChange={e => setData({...data,email: e.target.value})} />
                </div>

                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputPassword' class="form-label text-white">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Enter Password"
                    onChange={e => setData({...data,password: e.target.value})}/>
                </div>

                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputAddress' class="form-label text-white">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Address"
                   onChange={e => setData({...data,address: e.target.value})} />
                </div>
                <div className='col-12 mb-3 ml-[500px] mb-[20px] '>
                    <label class="form-label text-white" for="inputGroupFile01" >Select Image</label>
                    <input type="file" class="form-control" id="inputGroupFile01"
                    onChange={e => setData({...data,image: e.target.files[0]})}/>
                </div>
               <div class="col-12 ml-[500px] mb-[20px]">
               <button type="submit" class="btn btn-primary mb-[20px]">Create</button>
               </div>
            </form>
        </div>
        </div>
        
        
    )
}
export default AddUser;