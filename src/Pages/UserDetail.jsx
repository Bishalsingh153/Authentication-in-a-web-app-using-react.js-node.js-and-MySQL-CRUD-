import axios from 'axios';
import React, {useEffect,useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [user, setUser] = useState([])
    useEffect(()=> {
     axios.get('http://localhost:8081/get/'+id)
     .then(res => setUser(res.data.Result[0]))
     .catch(err => console.log(err));
    })

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
          navigate('/')
          //navigate('/start')
        }).catch(err => console.log(err));
     }



    return (
        
        <div>
             <div className='bg-gray-100 flex flex-col justify-center h-screen bg-gradient-to-b from-black to-black'>
            
            <div className='d-flex justify-content-center flex-column align-items-center mt-[100px] ml-[100px]'>
                <img src={`http://localhost:8081/images/`+user.image} alt="" className='rounded-full w-[200px] h-[200px]'/>
                <div className='d flex align-items-center flex-column mt-5'>
                    <h3 className='text-white'>Name: {user.name}</h3>
                    <h3 className='text-white'>Email: {user.email}</h3>
                    <h3 className='text-white'>Address: {user.address}</h3>

                </div>
                <div>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
            </div>
            
            </div>
            
            
    )
}
export default UserDetail;