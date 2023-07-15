import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UserEdit() {
    const [data, setData] = useState({
           name:"",
           email:"",
           address:"",
           
        })
        const navigate = useNavigate()

        const {id} = useParams();
        

        useEffect(()=> {
            
          axios.get('http://localhost:8081/get/' +id)
          .then(res => {
            setData({...data, name: res.data.Result[0].name,
            email: res.data.Result[0].email,
            address: res.data.Result[0].address,})
          }) 
        
          .catch(err =>console.log(err));
        }, [])


        const handleSubmit = (event)=>{
            event.preventDefault();
            
        
            axios.put('http://localhost:8081/update/'+id, data)
            .then(res => {
                if(res.data.Status==="Success") {
                    navigate('/user')
                }
               
            })
            .catch(err => console.log(err));
        }
    return (
        <div className='h-screen bg-gradient-to-b from-black to-black '>
           
        <div className='d-flex-column align-items-center pt-5'>
            <h2 className='ml-[500px] mb-[20px] text-white'>Update User</h2>
            <form className='row g-3 w-50 ' onSubmit={handleSubmit}>
              

            <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputname' class="form-label text-white">Name</label>
                    <input type="text" class="form-control" id="inputname" placeholder="Enter Name"
                   onChange={e => setData({...data,name: e.target.value})} value={data.name}/>
                </div>


                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputEmail' class="form-label text-white">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter Email"
                   onChange={e => setData({...data,email: e.target.value})} value={data.email}/>
                </div>

                
                <div class="col-12 ml-[500px] mb-[20px]">
                    <label for ='inputAddress' class="form-label text-white">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Enter Address"
                   onChange={e => setData({...data,address: e.target.value})} value={(data.address)}/>
                </div>
                
               <div class="col-12 ml-[500px] mb-[20px]">
               <button type="submit" class="btn btn-primary mb-[20px]">Update</button>
               </div>
            </form>
        </div>
        </div>
        
        
    )
}
export default UserEdit;